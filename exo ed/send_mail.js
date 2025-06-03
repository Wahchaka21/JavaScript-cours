const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "wahchaka@hotmail.com",
    pass: "",
  },
});

let mailOptions = {
  from: '"Wahchaka " <Wahchaka@hotmail.com>',
  to: "quentyn.petitjean@hotmail.com",
  subject: "Confirmation d'inscription",
  text: "Coucou",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Erreur lors de l'envoi :", error);
  }
  console.log("Email envoyé :", info.response);
});
