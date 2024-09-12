import nc from 'next-connect';
import bcrypt from 'bcrypt';

import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  }
}).put(async (req, res) => {
  await dbConnect();

  const password = await bcrypt.hash(req.body.password, 10);
  await User.findOneAndUpdate({ 'passwordReset.RPT': req.body.RPT }, { password: password, passwordReset: null });

  res.status(200).json({ success: true });
});

export default handler;
