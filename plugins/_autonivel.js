import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        user.role = global.rpg.role(user.level).name
        m.reply(`
✯─────❮ 𝗟𝗘𝗩𝗘𝗟 - 𝗨𝗣 ❯─────✯
*👤 Usuario:* ${this.getName(m.sender)} 
*_🎊 Felicidades subiste a un nuevo nivel_*
╭─────────────────────
*├➣🗿Tu nivel antiguo:* ${before}
*├➣🤓Tu nivel actual:* ${user.level}
*├➣🛡️Tu rol:* ${user.role}
╰─────────────────────
	`.trim())
    }
}
export const disabled = true