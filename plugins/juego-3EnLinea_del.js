let handler = async (m, {
	conn,
	usedPrefix,
	command
}) => {
	let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
	if (room == undefined) return
	delete conn.game[room.id]
	await m.reply('*✳️ La sala 3 en linea fue eliminada correctamente*')
}

handler.help = ['delttt']
handler.tags = ['games']
handler.command = /^(delttt)$/
handler.group = true
handler.limit = true

export default handler