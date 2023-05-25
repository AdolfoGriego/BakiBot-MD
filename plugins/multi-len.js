import * as fs from 'fs'
import { en, es } from '../lib/lenguajes/nexo.js'

let handler = async (m, { conn, args, command }) => {
if(args[0] == 'es'){
global.MultiNK = es
m.reply('El lenguaje del bot fue cambiado a español correctamente ✓')
}else if(args[0] == 'en'){
global.MultiNK = en
m.reply('The bot language was changed to English successfully ✓')
}else {
conn.sendMessage(m.chat, { caption: `[Lenguaje|Language] :

🇲🇽
*┣⊱ Lenguaje disponible español ☰*
*┣━⊱* _¿Como activar?, Ejemplo:_
*┗━━⊱* ${Prefijo + command} es
🇺🇸
*┣⊱ English language available ☰*
*┣━⊱* _How to activate?, Example:_
*┗━━⊱* ${Prefijo + command} en
`, footer: `\`\`\`[NOTA] : Esto no afecta a los comandos del bot
[NOTE] : This does not affect the bot commands
\`\`\`\n@AdolfoGriego`, location: { jpegThumbnail: await miniLoc('./multimedia/imagenes/MultiHD.jpg') }, buttons: [
{buttonId: `${prefix}menu`, buttonText: {displayText: `[ MENU 📖 ]`}, type: 1}
], headerType: 'LOCATION', mentions: [m.sender] })
}
}

handler.help = ['lenguaje']
handler.tags = ['propietario']
handler.command = /^(lenguaje|idioma|language|idiom)$/i
handler.rowner = true

export default handler
/** ******************************************

█████████
█▄█████▄█
█▼▼▼▼▼
█ 𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃
█▲▲▲▲▲
█████████
 ██ ██⠀
**/