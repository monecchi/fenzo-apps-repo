module.exports = {
  app: {
    name: 'Fenzo Serralheria',
    apiURL: process.env.API_URL
  },
  port: process.env.PORT || 3333,
  mailgun: {
    key: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    sender: process.env.MAILGUN_EMAIL_SENDER
  }
};
