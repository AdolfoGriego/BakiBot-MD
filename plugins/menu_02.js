import * as fs from 'fs'

let handler = async (m, { conn }) => {
	let uwur = await conn.profilePictureUrl(m.chat, 'image').catch(_ => './multimedia/imagenes/myunivers.jpg')
await conn.sendMessage(m.chat, { image: {url: uwur}, jpegThumbnail: fs.readFileSync('./multimedia/imagenes/mylogo.jpg'), caption: `
❐══════❮𝗠𝗘𝗡𝗨 - 𝗥𝗔𝗡𝗗𝗢𝗠❯══════❐

╭════════════════════════❐
║╭═════❮📥𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦📥❯════❐
║├❍ ${Prefijo}fbdl
║├❍ ${Prefijo}gitclone
║├❍ ${Prefijo}mediafire
║├❍ ${Prefijo}tiktokdl
║├❍ ${Prefijo}yta
║├❍ ${Prefijo}audio
║├❍ ${Prefijo}ytabochi
║├❍ ${Prefijo}ytvbochi
║├❍ ${Prefijo}ytmp3
║├❍ ${Prefijo}ytmp4
║├❍ ${Prefijo}play
║├❍ ${Prefijo}ytv
║╰════════════════════════❐
║╭══════❮🔎𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥🌐❯═════❐
║├❍ ${Prefijo}play2
║├❍ ${Prefijo}imagen
║├❍ ${Prefijo}google
║├❍ ${Prefijo}clima
║├❍ ${Prefijo}covid
║├❍ ${Prefijo}github
║├❍ ${Prefijo}tiktok
║├❍ ${Prefijo}pinterest
║├❍ ${Prefijo}playstore
║├❍ ${Prefijo}verip
║├❍ ${Prefijo}wallpaper
║├❍ ${Prefijo}wikipedia
║├❍ ${Prefijo}ytbuscar
║╰═══════════════════════❐
║╭═════❮📇𝗖𝗢𝗡𝗩𝗘𝗥𝗦𝗢𝗥📇❯═════❐
║├❍ ${Prefijo}txtestilo
║├❍ ${Prefijo}emojimix
║├❍ ${Prefijo}attp
║├❍ ${Prefijo}telesticker
║├❍ ${Prefijo}linesticker
║╰══════════════════════❐
║╭════❮⚒️𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦⚒️❯═══❐
║├❍ ${Prefijo}voz
║├❍ ${Prefijo}fetch
║├❍ ${Prefijo}traducir
║╰═════════════════════❐
║╭══════❮📿𝗥𝗔𝗡𝗗𝗢𝗠🃏❯══════❐
║├❍ ${Prefijo}nombreninja
║├❍ ${Prefijo}randimg
║├❍ ${Prefijo}djbot
║├❍ ${Prefijo}xd
║├❍ ${Prefijo}comediante
║├❍ ${Prefijo}notif
║├❍ ${Prefijo}tumama
║├❍ ${Prefijo}consejo
║├❍ ${Prefijo}minidatos
║├❍ ${Prefijo}fraseamor
║├❍ ${Prefijo}minombre
║├❍ ${Prefijo}simi
║├❍ ${Prefijo}wagrupos
║╰─────────────────────❐
╰══════════════════════❐
`.trim() }, { quoted: m })
}

handler.help = ['randmenu']
handler.command = /^(randmenu)$/i
handler.group = true

export default handler
