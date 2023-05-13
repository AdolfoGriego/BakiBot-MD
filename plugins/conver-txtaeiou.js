let handler = async (m, { conn, command, text }) => {
     if (!m.quoted && !text) return m.reply(`*✳️ Porfavor envio o responada a un texto*\n\n*📌 Ejemplo de uso:* ${Prefijo + command} lenguaje inclusivo\n`)
try {
var ter = command[1].toLowerCase()
var tex = m.quoted ? m.quoted.text : text
await conn.sendMessage(m.chat,{text:tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase())}, {quoted:m})
reacMoji(m.chat,conn,'💅',m)
} catch (e) {
m.reply(MultiNK.Error1())
}
}

handler.help = ['taxta | texte | tixti | toxto | tuxtu']
handler.tags = ['conversor']
handler.command = /^(taxta|texte|tixti|toxto|tuxtu)$/i

export default handler
