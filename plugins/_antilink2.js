import db from '../lib/database.js'

let linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

export async function before(m, { conn, isAdmin, isBotAdmin }) {
	if (m.isBaileys && m.fromMe)
        return !0
        if (!m.isGroup) return !1
        let chat = db.data.chats[m.chat]
        let bot = db.data.settings[this.user.jid] || {}
        let prt = m.key.participant
        let yid = m.key.id
        const isGroupLink = linkRegex.exec(m.text)
        if (chat.antiLink2 && isGroupLink && !isAdmin) { 
        	if (isBotAdmin) {
        	const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}` 
        if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `✯──────❮ 𝗔𝗡𝗧𝗜 - 𝗟𝗜𝗡𝗞𝟮 ❯──────✯\n`, `${isBotAdmin ? '' : 'no soy admin, no puedo eliminar a nadie'}`, NombreDelBot, ['[ DESACTIVAR ANTILINK 2 ]', Prefijo+'desactivar antilink2'], m)
        if (isBotAdmin && bot.restrict) {
        	await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: yid, participant: prt }})
        } else if (!bot.restrict) return m.reply('✯───❮ 𝗠𝗢𝗗𝗢 - 𝗥𝗘𝗦𝗧𝗥𝗜𝗡𝗚𝗜𝗗𝗢 ❯───✯\n🤖 𝘗𝘢𝘳𝘢 𝘳𝘦𝘢𝘭𝘪𝘻𝘢𝘳 𝘢𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘤𝘪𝘰𝘯, 𝘮𝘪 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘵𝘪𝘦𝘯𝘦 𝘲𝘶𝘦 𝘦𝘯𝘤𝘦𝘯𝘥𝘦𝘳 𝘦𝘭 𝘮𝘰𝘥𝘰 𝘳𝘦𝘴𝘵𝘳𝘪𝘯𝘨𝘪𝘥𝘰.')
        }
    return !0
}
