import db from '../lib/database.js'

let handler = async (m, { text, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) return m.reply(`Responda un sticker *${Prefijo + command}*`)
    if (!m.quoted.fileSha256) return m.reply('Falta hash SHA256(sticker)')
    if (!text) return m.reply(`*📌 Ejemplo de uso:*\n\n${Prefijo + command} ${Prefijo}menu\n`)
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) return m.reply('😒 No tienes permiso para realizar esta solicitud.')
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Completado correctamente ✅`)
}

handler.help = ['cmd'].map(v => 'set' + v + ' <texto>')
handler.tags = ['herramienta']
handler.command = /^setcmd$/i
handler.premium = true

export default handler
