import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = db.data.users[m.sender]
    if (!text) return m.reply(`✯─────❮ 𝗔𝗙𝗞 - 𝗨𝗦𝗘𝗥 ❯─────✯\n*_🔰 Porfavor diga su motivo para estar en afk_*\n*📌 Ejemplo de uso:* \n${Prefijo}afk ire a ver anime UwU`)
    if (text.length < 10) return m.reply(`✯─────❮ 𝗜𝗡𝗙𝗢 - 𝗔𝗙𝗞 ❯─────✯\n🌟 Porfavor agregue algo mas de texto porque su motivo es miy corto`)
    user.afk = + new Date
    user.afkReason = text
    await conn.sendMessage(m.chat, { text: `✯─────❮ 𝗜𝗡𝗙𝗢 - 𝗔𝗙𝗞 ❯─────✯\n*✳️ Se activo la función afk exitosamente*\n\n*👤 Usuario:* ${conn.getName(m.sender)}\n*💬 Razon:* ${text}`}, {quoted: m }) 
    reacMoji(m.chat, conn, '😴', m)
}

handler.help = ['afk [razon]']
handler.tags = ['casual']
handler.command = /^afk$/i

export default handler