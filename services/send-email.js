// import fetch from 'node-fetch';
const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const sendEmail = async ({
  name,
  email,
  message,
}) => {
  const toEmail = process.env.RECEIVING_EMAIL || 'susan@susanmorrow.us'

  console.log(`Sending to ${toEmail}`)
  
  const result = await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: toEmail,
            },
          ],
          subject: `👻 SusanMorrow.us Inquiry: ${name}`,
        },
      ],
      from: {
        email: 'susan@susanmorrow.us',
        name: `Susan Morrow`,
      },
      // replyTo: {
      //   email,
      //   name
      // },
      content: [
        {
          type: 'text/html',
          value: `<p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p>`,
        },
      ],
    }),
  });
  console.log(result)
  return result
};

export { sendEmail };
