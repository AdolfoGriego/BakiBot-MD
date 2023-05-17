import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, __dirname, command, isPrems }) => {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let totalreg = Object.keys(db.data.users).length
let rtotalreg = Object.values(db.data.users).filter(user => user.registered == true).length
let { exp, level, role } = db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let pushname = await conn.getName(m.sender)
let prem = isPrems?'Si':'No'
let limit = isPrems?'∞ Infinito UwU':db.data.users[m.sender].limit
let sections=[{title:"[ 🏞️ Menu-Simple ]",rows:[{title:"[ ⛈️ Funciones-Basicas ]",description:"Mi lista de comandos simples",rowId:`${Prefijo}menusimple`}]},{title:"[ 🌐 Menu-Internet ]",rows:[{title:"[ 🍎 Random-Menu ]",description:"Mi lista de comandos variados",rowId:`${Prefijo}randmenu`}]},{title:"[ 🎨 Menu-Arte ]",rows:[{title:"[ 🖼️ Crear-Logos ]",description:"Comandos para crear logos y mas",rowId:`${Prefijo}logofabrica`},]},{title:"[ 🎎 Menu-Anime ]",rows:[{title:"[ 🎎 Random-Anime ]",description:"Lista de comandos variados de anime",rowId:`${Prefijo}mianime`},]},{title:"[ 🔞 Menu-Hentai/Anime ]",rows:[{title:"[ 🔞 La-Biblia ]",description:"Mi lista de comandos +18",rowId:`${Prefijo}labiblia`},]},{title:"[ 🌁 Menu-Completo ]",rows:[{title:"[ 🌁 Principal ]",description:"Mi menu completo de todos mis comamdos",rowId:`${Prefijo}menucompleto`}]}];
await conn.sendMessage(m.chat, { text: `*❐ 👤Usuario:* ${pushname}
*❐ 🧿Premium:* ${prem}
*❐ 🔖Limite restante:* ${limit}
*❐ 🦁Nivel:* ${level} (${exp} / ${xp})
*❐ 👤Rol:* ${role}
*❐ 🍂XP:* ${exp}
╰═══════════════════════❍`, footer: `🍥 𝗕𝗼𝘁 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲 𝗽𝗮𝗿𝗮 𝗹𝗮 𝗶𝗻𝘀𝘁𝗮𝗹𝗮𝗰𝗶𝗼𝗻 𝗱𝗲 𝘁𝗲𝗿𝗺𝘂𝘅\n𝘀𝗶 𝗾𝘂𝗶𝗲𝗿𝗲𝘀 𝗶𝗻𝘀𝘁𝗮𝗹𝗮𝗿 𝗮𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗮𝗺𝗲\n🔰 wa.me/51957041866`, title: `╭════[ \`\`\`NeKoTinaBot-MD\`\`\` ]════❍
*❐ 🗃️Base de datos:* ${rtotalreg} a ${totalreg}
*❐ 🍎Version del bot:* ${_package.version}
*❐ 👩🏻‍💻Dueña del bot:* ${_package.author.name}
*❐ ✳️Prefijo único:* 「 ${Prefijo} 」
`, buttonText: "✳️Seleccióne una lista de comandos", sections }, { quoted:m})
reacMoji(m.chat, conn, '💬', m)
}

handler.help = ['menu']
handler.command = /^(menu|comandos|menú|help)$/i

export default handler
