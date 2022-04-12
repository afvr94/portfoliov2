import { NextApiRequest, NextApiResponse } from 'next';
import sendMail from '../../lib/sendMail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;
  try {
    await sendMail({ name, message, email });
    res.send(200);
    res.end();
  } catch (error) {
    console.log(`Email not sent: ${error}`);
    res.status(400).send(error);
  }
}
