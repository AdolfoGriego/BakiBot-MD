let handler = async (m, { conn }) => {

m.reply(`
❍───────────────────────❍
[ 𝗚𝗥𝗨𝗣𝗢𝗦 𝗢𝗙𝗖 - 𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃 ]

➣ 𝐆𝐑𝐔𝐏𝐎 𝟏:

➣ https://chat.whatsapp.com/CPkaPo74zCIHvqDUnYnA4q

❍───────────────────────❍`)

}
handler.help = ['wagrupos']
handler.tags = ['']
handler.command = /^(wagrupos|gruposwa|grupos)$/i
handler.limit = 2

export default handler