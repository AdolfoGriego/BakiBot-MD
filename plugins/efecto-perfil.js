let handler = async (m, { conn, command, text, args }) => {
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender	
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga
if("its-so-stupid"==command)var txtUrl=`&dog=${text||"I%20am%20stupid%20%3Av"}`;else if("youtube-comment"==command)var txtUrl=`&comment=${text||"Sexy%20Who%20Reads%20It%207w7r"}&username=${name}`;else var txtUrl="";
try {
    let encUrl = encodeURIComponent(await conn.profilePictureUrl(etiqueta, 'image').catch(_ => 'https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'))
    let img = 'https://some-random-api.ml/canvas/'+command+'?avatar='+encUrl+txtUrl
    conn.sendMessage(m.chat, { image: {url: img}, caption: `*🦹 Efecto de perfil:* ${command}
*👤 Solicitado por:* @${etiqueta.replace(/@.+/, '')}`, mentions: [etiqueta] }, { quoted: m })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['lolice', 'horny', 'blur', 'gay', 'triggered', 'simpcard', 'pixelate', 'its-so-stupid', 'youtube-comment']
handler.tags = ['fabricar']
handler.command = /^(lolice|horny|blur|gay|triggered|simpcard|pixelate|its-so-stupid|youtube-comment)$/i
handler.limit = true

export default handler
