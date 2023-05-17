let handler = async (m, { conn, command }) => {
	let q = m.quoted ? m.quoted : m 
	let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
   if (!/image|video/.test(mime)) return m.reply(`✳️ Envie ó Responda un video ó imagen con el comando \n\n${Prefijo + command}\n`)
try {
var textmedia = m.quoted.caption || '❗ No se pudo recuperar un comentario.'
await conn.sendMessage(m.chat,{text:textmedia},{ephemeralExpiration:24*3600,quoted:m})
reacMoji(m.chat,conn,'🖨️',m)
} catch {
m.reply(MultiNK.Error1())
}
}

handler.help = ['rescom']
handler.tags = ['herramienta']
handler.command = /^(rescom)$/i

export default handler
