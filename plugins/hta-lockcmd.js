import db from '../lib/database.js'

let handler = async (m, { command }) => {
    if (!m.quoted) return m.reply('Responda un mensaje!')
    if (!m.quoted.fileSha256) return m.reply('Falta hash SHA256')
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) return m.reply('[ ! ] Hash no encontrado en la base de datos')
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Hecho ✓')
}

handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['herramienta']
handler.command = /^(un)?lockcmd$/i
handler.premium = true

export default handler
