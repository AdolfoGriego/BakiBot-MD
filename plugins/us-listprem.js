import db from '../lib/database.js'

let handler = async (m, { conn, args, isOwner }) => {
  let user = Object.entries(db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let premiumTime = db.data.users[m.sender].premiumTime
  let prem = db.data.users[m.sender].premium
  let usMap = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, usMap.length)
  conn.sendMessage(m.chat,{text:`
*❐═════[ ⭐ LISTA - PREMIUM ⭐ ]═════❐*

*👤Cliente:* @${m.sender.split`@`[0]}
${isOwner?'*⏰ Tiempo premium* : ∞':prem ? `*⏰ Tiempo premium* : _${clockString(premiumTime - new Date() * 1)}._` : '*🚫 Ya no es un usuario premium!'}
${'\n❍════════════════════════❍\n\n'+usMap.slice(0, len).map(({ jid, name, premiumTime, registered }, i) => `*👤 Usuario:* ${registered ? name : conn.getName(jid)}
*⏰ Tiempo premium* : ${premiumTime > 0 ? `_${clockString (premiumTime - new Date() * 1)}._` : '🚫 Expirado ---'}`).join`\n\n`}
`.trim(),mentions:[m.sender]},{quoted:m})
setTimeout(() => {
    if (db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
  }, db.data.chats[m.chat].deletemediaTime)
}

handler.help = ['listprem']
handler.tags = ['casual']
handler.command = /^(listprem|premlist)$/i

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}
