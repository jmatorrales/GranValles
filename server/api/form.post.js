import nodemailer from 'nodemailer'
import { render } from '@vue-email/render'
import ContactForm from '~/emails/ContactForm.vue'

export default defineEventHandler(async (event) => {
  const { nombre, phone, email, comments } = await readBody(event)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const html = await render(ContactForm, { nombre, phone, email, comments })

  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'info@granvalles.es',
    subject: 'Formulari de contacte per web',
    // text: `Nombre: ${body.nombre}\nTeléfono: ${body.phone}\nEmail: ${body.email}\nComentario: ${body.comments}`
    html
  })

  console.log('Mensaje enviado:', info.messageId)
  return { ok: true }
})