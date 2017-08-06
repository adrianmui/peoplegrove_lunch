const config = {
  port: process.env.port || 4200,
  Slack: {
    app_name: process.env.SLACK_APP_NAME,
    client_id: process.env.SLACK_CLIENT_ID,
    client_secret: process.env.SLACK_CLIENT_SECRET,
    verification_token: process.env.SLACK_VERIFICATION_TOKEN
  },
  Mongo: {
    url: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  Google: {
    consumerKey: process.env.GOOGLE_CONSUMER_KEY,
    consumerSecret: process.env.GOOGLE_CONSUMER_SECRET
  },
  Passport: {
    secret: process.env.PASSPORT_SECRET
  },
  
}

module.exports = config;