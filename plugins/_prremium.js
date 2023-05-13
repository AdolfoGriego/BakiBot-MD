import db from '../lib/database.js'

let handler = m => m
export async function all(m) {
    let user = db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await m.reply(`✳️ Hey se acabo tu tiempo premium espero que le hayas aprovechado UwU`)
            user.premiumTime = 0
            user.premium = false
        }
    }
}
