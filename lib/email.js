const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = class Email {
    constructor(user, token, emailType) {
        if (emailType === "verification") {
            this.to = user.email
            this.url = `${process.env.SENDGRID_API_URL_VERIFY}=${token}`
            this.fromEmail = process.env.SENDGRID_API_FROM_EMAIL
            this.fromName = process.env.SENDGRID_API_FROM_NAME
            this.templateId = process.env.SENDGRID_API_TEMPLATEID_VERIFY
        }
        if (emailType === "resetPass") {
            this.to = user.email
            this.url = `${process.env.SENDGRID_API_URL_FORGOT}=${token}`
            this.fromEmail = process.env.SENDGRID_API_FROM_EMAIL
            this.fromName = process.env.SENDGRID_API_FROM_NAME
            this.templateId = process.env.SENDGRID_API_TEMPLATEID_FORGOT
        }
    }

    async sendMagicLink() {
        const mailOptions = {
            to: this.to,
            from: {
                email: this.fromEmail,
                name: this.fromName,
            },
            templateId: this.templateId,
            dynamic_template_data: {
                action_url: this.url,
            },
        }

        await sgMail.send(mailOptions).then(() => {}, console.error)
    }
}
