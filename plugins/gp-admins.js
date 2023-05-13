let handler = async (m, { conn, participants, groupMetadata }) => {
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `🛡 [${i + 1}] wa.me/${v.id.split('@')[0]}`).join('\n\n')
    m.reply(`*😖 Administradores del grupo* : ${groupMetadata.subject}\n\n*🍂 Total:* \n\n${listAdmin}\n`)
}

handler.help = ['admins']
handler.tags = ['casual']
handler.command = /^(admins)$/i
handler.group = true

export default handler
