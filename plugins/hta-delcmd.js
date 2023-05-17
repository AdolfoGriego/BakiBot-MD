import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) return m.reply(`No se encontraron hashes!`)
    let sticker = db.data.sticker
    if (sticker[hash] && sticker[hash].locked) return m.reply('😒 No tienes permiso para eliminar este sticker-cmd')
    delete sticker[hash]
    m.reply(`Eliminado correctamente ✅`)
}

handler.help = ['delcmd <texto>']
handler.tags = ['herramienta']
handler.command = /^delcmd$/i
handler.premium = true

export default handler
