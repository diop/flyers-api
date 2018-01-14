const nodemailer = require('nodemailer')

const { getFlyer } = require('../database/queries')

const formatEventDetails = (details) => {
  return `<img src="http://flyers.ai${flyerurl}" /><br>
${details.eventname}
${details.eventDate} ${details.starttime} - ${details.endtime}
${details.venuename}
${details.address}, ${details.city} ${details.state} ${details.zip}
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
  const eventDetails = getFlyer(eventId)[0]

  const mailOptions = {
    from: '"Fred Foo 👻" <flyers.ai.promotions@gmail.com>',
    to: emailAddress,
    subject: `${eventDetails.eventname} Event Link`,
    text: `Share this link with your friends: ${eventLink}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }

    console.log('Message sent:', info)
  })
}

const sendQrCodeEmail = (emailAddress, qrCodeImage, eventId) => {
  const eventDetails = getFlyer(eventId)[0]
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
      content: qrCodeImage,
      cid: uniqueString
    }]
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }

    console.log('Message sent:', info)
  })
}

module.exports = { sendEventLinkEmail, sendQrCodeEmail }
