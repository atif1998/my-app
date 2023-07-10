const nodemailer = require("nodemailer");
const { getUsers } = require("./user.controller");

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muhammadatiflatif5468@gmail.com",
      pass: "utrfeimgvktbdlvx",
    },
  });
  // const Emails=getUsers();
  // console.log(Emails);
  var maillist = ["malatif39@ee.ceme.edu.pk", "atiflatif5468@gmail.com"];
  const info = await transporter.sendMail({
    from: "muhammadatiflatif5468@gmail.com", // sender address
    to: maillist, // list of receivers
    subject: "Hello ahsan", // Subject line
    text: "mei PTI se isteefa deta ho, mei aik muhab e watan Pakistani hon ", // plain text body
  });

  console.log("Message sent: %s", info.messageId, info.messageSize);
  res.json(info);
};

module.exports = sendMail;
