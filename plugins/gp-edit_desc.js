let handler = async (m, { conn, args, text }) => {
if (!text) return m.reply(`*✳️ Ingrese un texto con el cual se actualizará la descripción del grupo actual*`)
if (text.length >= 513) return reply(`*📌 Máximo de carácteres 512*`)
await conn.groupUpdateDescription(m.chat, text)
reacMoji(m.chat, conn, '✅️', m)
}
handler.help = ['gpdesc <texto>']
handler.tags = ['grupos', 'admins']
handler.command = /^(gpdesc|descgp|setdesk|setdesc)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
