import db from '../lib/database.js'

export async function all(m) {
	let { antiPrivado } = db.data.settings[this.user.jid]
	let uptime = timeString(process.uptime())
	let info_p = `𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃┃Coloca #menu┃Para ver si esta activo el bot┃⏳Tiempo activo: ${uptime}${antiPrivado ? "┃ No privado al bot" : ""}`
	let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
    	await this.updateProfileStatus(info_p).catch((_) => _)
    settingstatus = new Date() * 1
    }
}
