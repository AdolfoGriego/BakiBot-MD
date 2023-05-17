import Connection from '../lib/connection.js'

let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(Connection.store.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `*✳️ ${await conn.getName(jid)} :*\n🏷️${jid} [${chat?.metadata?.read_only ? 'Fuera del grupo' : 'Dentro del grupo'}]\n\n`
    m.reply(`*🍂 Grupos con mayor actividad de ${NombreDelBot} actualmente:*

${txt}
`.trim())
}
handler.help = ['gplist']
handler.tags = ['casual']
handler.command = /^(gplist|listgp|grouplist|listgroups|groups)$/i

export default handler 