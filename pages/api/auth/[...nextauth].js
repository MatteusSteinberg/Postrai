import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

import HandleFacebookProvider from '../../../lib/provider/facebook';
import HandleGithubProvider from '../../../lib/provider/github';
import HandleGoogleProvider from '../../../lib/provider/google';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),

    CredentialsProvider({
      name: 'Postrai',
      credentials: {
        email: {
          label: 'Email',
          type: 'email'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (credentials.email.length === 0 || credentials.email.length === 0) return null;
        await dbConnect();
        const response = await User.findOne({ email: credentials.email });
        const user = response;
        if (response) {
          const auth = new Promise((resolve, reject) => {
            bcrypt.compare(credentials.password, response.password, function (err, isSame) {
              if (isSame) {
                // Info stored in session
                resolve({
                  _id: user._id,
                  id: user._id.toString(),
                  email: user.email,
                  CreatedTimestamp: user.CreatedTimestamp
                });
              } else {
                resolve(null);
              }
            });
          });
          return await auth;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) token.user = user;
      if (account) token.user.provider = account.provider;
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      let authUser = false;

      if (account.provider === 'facebook') {
        authUser = await HandleFacebookProvider(user.email, user.id, user.name, account.access_token, user.image);
      }

      if (account.provider === 'github') {
        authUser = await HandleGithubProvider(user.email, user.name, user.id, profile.html_url, account.access_token, user.image);
      }

      if (account.provider === 'google') {
        authUser = await HandleGoogleProvider(
          user.email,
          user.name,
          user.id,
          profile.email_verified,
          account.refresh_token,
          account.access_token,
          user.image
        );
      }

      if (account.provider === 'credentials') {
        await User.findByIdAndUpdate(user._id, {
          LastLoginDate: new Date()
        });
        authUser = true;
      }

      if (authUser) return true;
      else return false;
    },
    redirect({ url, baseUrl }) {
      return baseUrl + '/user-setup';
    }
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    encryption: true
  },
  pages: {
    signIn: '/login'
  }
};

export default (req, res) => NextAuth(req, res, options);
