import { Client } from 'postmark';
import { Configuration, OpenAIApi } from 'openai'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
 
    const HtmlBody = `<h1>Contact from = </h1><p><b>${name}</b> justsaid:</p><p>${message}</p><p>${email}</p>`;
    const TextBody = `Contact from ${name}: \r\n${email}\r\n${message}`;

    let spamPrefix = '❌'
    // ai spam check
    let isAISpam = false

    // Check for spam:
    const isPostSpam = await fetch('https://spamcheck.postmarkapp.com/filter', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_TOKEN,
      },
      body: JSON.stringify({
        email: `Contact from ${name}: \r\n${email}\r\n${message}`
      }),
    })
      .then((response) => response.json())
      .then((data) => data)
      
      console.log(`Postmark Spam Check: ${console.dir(isPostSpam)}`);

      
      // if (isPostSpam && spamPrefix) {
    //   return res.status(400).json({
    //     error: {
      //       code: 'bad_request',
      //       message: 'Your message was flagged as spam.',
      //     },
      //   });
      // }
      
      // break the app if the API key is missing
      if (!process.env.OPENAI_API_KEY) {
        return res.status(404).json({
          error: {
            code: 'not_found',
            message:
              "The requested endpoint was not found or doesn't support this method.",
          },
        });
    }
    
    console.log(`Prompt content: ${TextBody}`)

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
      // model: 'gpt-3.5-turbo',
      // model: "text-moderation-latest",
      model: "text-davinci-003",
      // prompt: "Respond with `true` if you believe the message to be legitimate business correspondance or `false` if the message seems like a scam or promotion.",
      // prompt:  'USER: Answer the question based on the context below. Keep the answer short and concise. Respond "Unsure about answer" if not sure about the answer.'
      // Context: `A website form is getting a lot of spam email from a small, local business. Would you be able to give me a floating point number between 0 and 1 that represents the probability that the following message is spam? The closer to 1, the more likely it is spam. The closer to 0, the less likely it is spam. \n\n failing business and need as much accuracy to avoid false positives. 
      // Here is the Message: ' + body.message + '\n\nAnswer:,
      // Question: `Does this message seem legitimate or like suspicuious spam. It was submitted via a homemade php contact form`?
      prompt: `The following messages are from a contact form for a counselor. Answer "spam" if the following message seems like spam or an unwanted business promotion. Answer "notspam" if the message seems like legitimate correspondace. \n\nMessage: ${TextBody}\n\nAnswer: `,
      temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.3,
      max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["\n"],
    });
    
    const data = response.data.choices[0].text;
    console.log(data);
    
    const isSpam = `[POTENTTIAL SPAM] ${isPostSpam && '❌ postspam'} | ${isAISpam && '❌ aiSpam'}`
    console.log(isSpam);
    // // if (data === 'true') {
    // //   return res.status(400).json({
    // //     error: {
    // //       code: 'bad_request',
    // //       message: '❌ Your message seems to flagged as spam.',
    // //     },
    // //   });
    // // }
    
    // Send an email:

    
    const postmarkClient = new Client(process.env.POSTMARK_TOKEN || '');

    // const client = new postmark.ServerClient(POSTMARK_TOKEN);

    const emailResponse = await postmarkClient.sendEmail({
      From: 'susan@susanmorrow.us',
      To: process.env.RECEIVING_EMAIL || 'me@lacymorrow.com',
      Subject: `SusanMorrow.us Inquiry: ${name}`,
      HtmlBody,
      TextBody,
      MessageStream: 'outbound',
    });

    console.dir(emailResponse);
    if(emailResponse.ErrorCode === 0) {
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
