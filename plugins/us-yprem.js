import db from '../lib/database.js'

let handler = async (m, { conn, text, command }) => {
    let etiqueta
    if (m.isGroup) etiqueta = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else etiqueta = m.chat
    let user = db.data.users[etiqueta]
    if (!etiqueta) return m.reply(`Por favor etiquete o mencioné a alguien!`)
    let txt = text.replace('@' + etiqueta.split`@`[0], '').trim()
    if (!txt) return m.reply(`Por favor indique el número de dias`)
    if (isNaN(txt)) return m.reply(`Solo números!\n\nEjemplo de uso:\n${Prefijo + command} @${m.sender.split`@`[0]} 1`)
    var nDias = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += nDias
    else user.premiumTime = now + nDias
user.premium = true
    m.reply(`*[ USUARIO PREMIUM ]*
🔖 *Nombre:* ${user.name}
📆 *Dias:* ${txt} dia(s)
📉 *Tiempo restante:* ${user.premiumTime - now}MS`)
}
handler.help = ['addprem [@usuario] <dias>']
handler.tags = ['propietario']
handler.command = /^(addprem)$/i

handler.group = true
handler.rowner = true

export default handler
