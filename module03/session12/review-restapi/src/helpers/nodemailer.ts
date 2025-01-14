import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"aries@purwadhika.com",
        pass:"xxxx",
    }
})

export default transporter