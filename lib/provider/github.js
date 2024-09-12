import dbConnect from "../dbConnect";
import User from "../../models/User";

async function HandleGithubProvider(githubEmail, name, accountId, githubUrl, access_token, imageUrl) {
    await dbConnect();

    const githubCredentials = {
        accountId: accountId,
        name: name,
        githubEmail: githubEmail,
        githubUrl: githubUrl,
        imageUrl: imageUrl
    }

    try {
        const lookUpQuery = { 'githubCredentials.githubEmail': githubEmail };

        const userExists = await User.findOne(lookUpQuery);

        if (userExists) {
            const updatedUser = await User.findOneAndUpdate(lookUpQuery, {
                access_token: access_token,
            })

            return true;
        } else {
            const newUser = new User({
                password: access_token,
                access_token: access_token,
                githubCredentials: githubCredentials
            });

            const userCreated = await newUser.save();
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default HandleGithubProvider