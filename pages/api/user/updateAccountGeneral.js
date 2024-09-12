import nc from "next-connect"
import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/User'

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).end("Something broke!")
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found")
    },
})

    .post(async (req, res) => {
        const { firstName, lastName, email, phoneNumber, country, id } = req.body.formValues;
        await dbConnect()

        const emailExists = await User.findOne({ email: email });

        if (emailExists && emailExists._id != id && email.length > 0) {
            res.status(200).json({ success: false, message: 'Email is occupied.' })
            return;
        }
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            country: country
        });


        res.status(200).json({ success: true, message: 'Account updated succesfully.' });
    })


export default handler