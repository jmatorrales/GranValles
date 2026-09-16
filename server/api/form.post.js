import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true si usas puerto 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const info = await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: 'info@granvalles.es',
  subject: 'Formulari de contacte per web',
  text: `Nombre: ${body.nombre}\nTeléfono: ${body.phone}\nEmail: ${body.email}`,
  // en vez de text se puede hacer con html
})
console.log('Mensaje enviado:', info.messageId)

return { ok: true }
})