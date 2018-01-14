const nodemailer = require('nodemailer')

const { getFlyer } = require('../database/queries')

const formatEventDetails = (details) => {
  return `<img src="http://www.flyers.ai${details.flyerurl}" /><br>
${details.eventname}<br>
${details.eventdate} ${details.starttime} - ${details.endtime}<br>
${details.venuename}<br>
${details.address}, ${details.city} ${details.state} ${details.zip}<br>
${details.website}`
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "flyers.ai.promotions@gmail.com",
    pass: "12345678abcdef"
  }
})

const sendEventLinkEmail = (emailAddress, eventLink, eventId) => {
  getFlyer(eventId)
  .then(results => {
    const eventDetails = results[0]

    let mailOptions = {
        from: '"Fred Foo 👻" <foo@blurdybloop.com>',
        to: emailAddress,
        subject: `${eventDetails.eventname} Event Link`,
        text: `Share this link with your friends: ${eventLink}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }

      console.log('Message sent:', info)
    })
  })
}

const sendQrCodeEmail = (emailAddress, svgString, eventId) => {
  getFlyer(eventId)
  .then(results => {
    const eventDetails = results[0]
    const uniqueString = '2649534059251535'

    const emailHTML = 'Use this QR code at the event:<br>'
      + `<img src="cid:${uniqueString}" />`
      + '<br><br>' + formatEventDetails(eventDetails)

    const mailOptions = {
      from: '"Fred Foo 👻" <flyers.ai.promotions@gmail.com>',
      to: emailAddress,
      subject: `${eventDetails.eventname} QR Code`,
      html: emailHTML,
      attachment: [{
        filename: 'qr-code.png',
        content: svgString,
        cid: uniqueString
      }]
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }

      console.log('Message sent:', info)
    })
  })
  .catch(console.error)
}

module.exports = { sendEventLinkEmail, sendQrCodeEmail }
