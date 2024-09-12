import dbConnect from "../dbConnect";
import User from "../../models/User";

async function HandleFacebookProvider(facebookEmail, accountId, fullName, access_token, imageUrl) {
    await dbConnect();

    const facebookCredentials = {
        accountId: accountId,
        fullName: fullName,
        facebookEmail: facebookEmail,
        imageUrl: imageUrl
    }

    try {
        const lookUpQuery = { 'facebookCredentials.facebookEmail': facebookEmail };

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
                facebookCredentials: facebookCredentials
            });

            const userCreated = await newUser.save();
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default HandleFacebookProvider