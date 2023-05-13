import db from '../lib/database.js'

let handler = async (m) => {
    db.data.chats[m.chat].isBanned = false
    m.reply('*Chat desbaneado exitosamente ✅*\n\nA hora todos pueden usar el bot')
}

handler.help = ['unbanchat']
handler.tags = ['propietario']
handler.command = /^unbanchat$/i
handler.owner = true

export default handler