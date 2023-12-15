// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const mailchimpClient = require("@mailchimp/mailchimp_transactional")("e9614309716cf256039939bc2124a288-us11");
// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(bodyParser.json());

// // Replace with your Mailchimp API key and audience ID
// const MAILCHIMP_API_KEY = 'YOUR_MAILCHIMP_API_KEY';
// const MAILCHIMP_AUDIENCE_ID = 'YOUR_MAILCHIMP_AUDIENCE_ID';

// // Mailchimp API endpoint
// const API_ENDPOINT = `https://<dc>.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

// // CORS handling - replace with your frontend's URL
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });











require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS handling - replace with your frontend's URL
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://newsletter-zia2.vercel.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const response = await axios.post(
      `https://us11.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      { email_address: email, status: 'subscribed' },
      {
        auth: {
          username: 'anystring',
          password: process.env.MAILCHIMP_API_KEY,
        },
      }
    );

    res.status(response.status).json({ success: true });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error.response.data);
    res.status(error.response.status).json({ success: false, error: error.response.data });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
