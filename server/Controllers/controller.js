require('dotenv').config();

const FormData = require("../Models/FormModel");
const nodemailer = require("nodemailer");
const MailGen = require("mailgen");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the Server-side");
  } catch (error) {
    console.log(error);
  }
};

const signup = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, username, email, password } = req.body;

    const userExist = await FormData.findOne({ email });
    const usernameExist = await FormData.findOne({ username });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    if (usernameExist) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    await FormData.create({ name, username, email, password });

    // Send Confirmation Email
    const config = {
      host:'smtppro.zoho.in',
      secure:true,
      port:465,
      auth: {
        user: 'aaryandev.test@zohomail.in',
        pass: process.env.PASSWORD,
      },
      tls:{
        rejectUnauthorized:false
      }
    };

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new MailGen({
      theme: "salted",
      product: {
        name: "Dribbble",
        link: "https://mailgen.js/",
      },
    });

    let response = {
      body: {
        name,
        intro: `Please take a second to confirm ${email} as your email address`,
      },
      outro:'Dribbble 2024'
    };

    let mail = MailGenerator.generate(response)

    let message = {
      from : "aaryandev.test@zohomail.in",
      to : email,
      subject: 'Confirm your email at Dribbble',
      html: mail
    }

    transporter.sendMail(message).then(()=>{
      return res.status(200).json({
        msg:"Email Sent!"
      })
    }).catch(error=>{
      return res.status(500).json({error})
    })

    // res.status(200).send({msg : "Succesfully created"});
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { home, signup };
