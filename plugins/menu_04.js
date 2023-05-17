import * as fs from 'fs'

let handler = async (m, { conn }) => {
	let uwur = await conn.profilePictureUrl(m.chat, 'image').catch(_ => './multimedia/imagenes/myunivers.jpg')
await conn.sendMessage(m.chat, { image: {url: uwur}, jpegThumbnail: fs.readFileSync('./multimedia/imagenes/mylogo.jpg'), caption: `
❐══════❮ 𝗠𝗘𝗡𝗨 - 𝗔𝗡𝗜𝗠𝗘 ❯══════❐

╭══════════════════════════❐
║╭═══════❮ 🎴𝗔𝗡𝗜𝗠𝗘🎴 ❯═══════❐
║├❍ ${Prefijo}anifrase
║├❍ ${Prefijo}waifu_hd
║├❍ ${Prefijo}rostro_4k
║├❍ ${Prefijo}infoanime
║├❍ ${Prefijo}neko
║├❍ ${Prefijo}snime
║├❍ ${Prefijo}waifu
║╰════════════════════════❐
╰══════════════════════════❐
`.trim() }, { quoted: m })
}

handler.help = ['mianime']
handler.command = /^(mianime)$/i
handler.group = true

export default handler
