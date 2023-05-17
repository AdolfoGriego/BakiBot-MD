import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
*LISTA HASH*

${Object.entries(db.data.sticker).map(([key, value], index) => `[ ${index + 1} ]\n*🤓 Identificador*: ${value.locked ? `${key} *(Bloqueado)*` : key}\n*Funcion ejecutable* : ${value.text}`).join('\n\n')}
`.trim(), null, {
        mentions: Object.values(db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}

handler.help = ['listcmd']
handler.tags = ['herramienta']
handler.command = /^listcmd$/i
handler.premium = true

export default handler
