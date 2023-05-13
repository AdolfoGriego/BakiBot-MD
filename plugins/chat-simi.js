import fetch from 'node-fetch'
let handler = async (m, { text, command }) => {
	if (!text) return m.reply(`Y el texto ...?`)
try {
	let chatsimi = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=`+MultiNK.Lengua())
	m.reply(chatsimi.success?chatsimi.success:'-')
} catch (e) {
m.reply(`No hay sistema!`)
}
}

handler.help = ['simi'].map(v => v + ' <texto>')
handler.tags = ['']
handler.command = /^(simi|bot)$/i

export default handler
