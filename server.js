const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received form data:', { name, email, message });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'donotreplynartanam@gmail.com', // Your Gmail address
      pass: 'rfku hezv ntkh qrib' // Your Gmail app password
    }
  });

  const mailOptions = {
    from: 'donotreply@nartanamdance.com', // Replace with your "do not reply" email address
    to: 'nartanamacd@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send email: ' + error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
