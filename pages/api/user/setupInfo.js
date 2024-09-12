import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import nc from 'next-connect';
import { getSession } from 'next-auth/react'

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
    .post(async (req, res) => {
        await dbConnect();

        const user = await User.findOneAndUpdate({ $or: [{ _id: req.body._id }, { 'facebookCredentials.accountId': req.body.id }, { 'githubCredentials.accountId': req.body.id }, { 'googleCredentials.accountId': req.body.id }] }, {
            phoneNumber: req.body.phoneNumber,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            companyName: req.body.companyName,
            workSector: req.body.workSector,
            occupation: req.body.occupation,
            UserSetupDone: true
        });

        res.json({ message: 'User setup done by: ' + req.body._id });
    })

export default handler;
