let handler = async (m, { conn, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return m.reply(`:v`)
    delete conn.vote[id]
    m.reply('Las votaciones se reiniciaron exitosamente ✅')
}

handler.help = ['reiniciarvotos']
handler.tags = ['admins', 'grupos']
handler.command = /^reiniciarvotos$/i
handler.group = true

export default handler
