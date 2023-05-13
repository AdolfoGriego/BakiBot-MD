let handler = async (m, { conn }) => { 
	let usimg = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './multimedia/imagenes/avatar_contact.png')
try {
var rpt = await fetchJson(`https://latam-api.vercel.app/api/ani_frases?apikey=${MyApiKey}`)
conn.relayMessage(m.chat, {extendedTextMessage:{text: `✯────❮ 𝗔𝗡𝗜𝗠𝗘 - 𝗙𝗥𝗔𝗦𝗘 ❯────✯\n*⎔ 🎎 Anime:* ${rpt.anime}\n*⎔ 🦹 Personaje:* ${rpt.personaje}\n*⎔ ✍️ Frase:* ${rpt.frase}\n`, ...{ contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: usimg, sourceUrl: 'https://youtube.com/@adolfo275' }}}
}}, {})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['anifrase']
handler.tags = ['animeuwu']
handler.command = /^(anifrase)$/i
handler.limit = true

export default handler