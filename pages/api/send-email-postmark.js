import { Client } from 'postmark';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Send an email:
    const postmarkClient = new Client(process.env.POSTMARK_TOKEN || '');

    // const client = new postmark.ServerClient(POSTMARK_TOKEN);

    const emailResponse = await postmarkClient.sendEmail({
      From: 'susan@susanmorrow.us',
      To: process.env.RECEIVING_EMAIL || 'susan@susanmorrow.us',
      Subject: `👻 SusanMorrow.us Inquiry: ${name}`,
      HtmlBody: `<h1>Contact from: </h1><p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p>`,
      TextBody: `Contact from ${name}: \r\n${email}\r\n${message}`,
      MessageStream: 'outbound',
    });

    console.dir(emailResponse);
    if(emailResponse.ErrorCode !== 0) {
      return res
        .status(200)
        .json({ message: 'Your message was sent, thanks for reaching out  🚀' });
    }
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

export default handler;
