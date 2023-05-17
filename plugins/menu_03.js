import * as fs from 'fs'

let handler = async (m, { conn }) => {
	let uwur = await conn.profilePictureUrl(m.chat, 'image').catch(_ => './multimedia/imagenes/myunivers.jpg')
await conn.sendMessage(m.chat, { image: {url: uwur}, jpegThumbnail: fs.readFileSync('./multimedia/imagenes/mylogo.jpg'), caption: `
❐══════❮𝗠𝗘𝗡𝗨 - 𝗙𝗔𝗕𝗥𝗜𝗖𝗔❯══════❐

╭════════════════════════❐
║╭════❮🎨𝗖𝗥𝗘𝗔-𝗟𝗢𝗚𝗢𝗦🎨❯═════❐
║├❍ ${Prefijo}logo
║├❍ ${Prefijo}lolice
║├❍ ${Prefijo}horny
║├❍ ${Prefijo}blur
║├❍ ${Prefijo}gay
║├❍ ${Prefijo}triggered
║├❍ ${Prefijo}simpcard
║├❍ ${Prefijo}pixelate
║├❍ ${Prefijo}its-so-stupid
║├❍ ${Prefijo}youtube-comment
║├❍ ${Prefijo}escribir
║├❍ ${Prefijo}imgtxt
║╰═══════════════════════❐
╰════════════════════════❐
`.trim() }, { quoted: m })
}

handler.help = ['logofabrica']
handler.command = /^(logofabrica)$/i
handler.group = true

export default handler
