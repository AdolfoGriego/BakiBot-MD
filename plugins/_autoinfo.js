import db from '../lib/database.js'

export async function all(m) {
	let { antiPrivado } = db.data.settings[this.user.jid]
	let uptime = timeString(process.uptime())
	let info_p = `𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃┃Hola soy un bot artificial┃si quieres ser sub bot coloca .serbot┃⏳Tiempo activo: ${uptime}${antiPrivado ? "┃No le escribas al bot seras o bloqueado" : ""}`
	let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
    	await this.updateProfileStatus(info_p).catch((_) => _)
    settingstatus = new Date() * 1
    }
}
