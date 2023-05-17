import db from '../lib/database.js'

let handler = async (m, { command, text }) => {
    let etiqueta
    if (m.isGroup) etiqueta = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else etiqueta = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = db.data.users[etiqueta]
    if (!etiqueta) return m.reply(`Por favor etiquete o mencioné a alguien!\n\nEjemplo de uso:\n${Prefijo + command} @${m.sender.split`@`[0]}`)
    user.premium = false
    user.premiumTime = 0
    m.reply(`*${user.name}* dejó de ser premium`)
}
handler.help = ['delprem [@usuario]']
handler.tags = ['propietario']
handler.command = /^(delprem)$/i

handler.group = true
handler.rowner = true

export default handler
