// import fetch from 'node-fetch';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const sendEmail = async ({
  name,
  email,
  message,
}) => {
  await fetch(SENDGRID_API, {
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
              email: 'susan@susanmorrow.us',
            },
          ],
          subject: `👻 SusanMorrow.us Inquiry: ${name} ✔`,
        },
      ],
      from: {
        email: 'yo@fly5.live',
        name: `★ FLY5`,
      },
      content: [
        {
          type: 'text/html',
          value: `<p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p><p>${phone}</p>`,
        },
      ],
    }),
  });
};

export { sendEmail };
