import db from '../lib/database.js'

export async function all(m) {
    if (!m.isGroup)
        return
    let chats = db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, '✯─────❮𝗧𝗜𝗘𝗠𝗣𝗢 - 𝗚𝗥𝗨𝗣𝗢❯─────✯\n\n⏳ Hola se termino el tiempo de quedarme en este grupo.\n\n*🤭Creador: wa.me/5218451003894')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}