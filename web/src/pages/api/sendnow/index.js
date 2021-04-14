const keys = require('../../../config/keys');
const { key, domain, sender } = keys.mailgun;

const mailgun = require('mailgun-js')({
  apiKey: key,
  domain: domain
});

// https://stadtteilliebe.de/blog/serverless-contact-form

export default async (req, res) => {
  const { senderMail, senderName, senderPhone, content, recipientMail } = req.body

  // Check if fields are all filled
  if (senderMail === "" || senderName === "" || senderPhone === "" || content === "" || recipientMail === "") {
    res.status(403).send("");
    return
  }

  const mailerRes = await mailer({ senderMail, senderName, senderPhone, text: content, recipientMail })
  res.send(mailerRes);
}

const mailer = ({ senderMail, senderName, senderPhone, text, recipientMail }) => {
  const date = new Date().toUTCString();
  const xVariables = {
    "customer_name": senderName,
    "customer": senderName,
    "customer_phone": senderPhone,
    "customer_message": text
  }
  const from = senderName && senderMail ? `${senderName} <${senderMail}>` : `${senderName || senderMail}`
  const data = {
    from,
    to: `${recipientMail}`,
    subject: `Nova mensagem de ${from}`,
    senderPhone,
    text,
    replyTo: from,
    'h:X-Mailgun-Variables': `${JSON.stringify(xVariables)}`,
    template: 'contact-feedback',
    'o:deliverytime': `${date}`, //'Fri, 6 Jul 2017 18:10:10 -0000',
    'o:tag': ['contato-geral']
  };

  return new Promise((resolve, reject) => {
    mailgun.messages().send(data, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}
