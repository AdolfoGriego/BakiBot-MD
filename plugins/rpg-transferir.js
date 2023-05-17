import db from '../lib/database.js'

const items = [
    'bkoins', 'elixir', 'basura', 'madera',
    'roca', 'cuerda', 'miMascot', 'esmeralda',
    'diamante', 'oro', 'hierro', 'ordinario',
    'singular', 'mitico', 'legendario', 'mascota',
]
let confirmation = {}
async function handler(m, { conn, args, command }) {
    if (confirmation[m.sender]) return m.reply('Ya estas realizando una transferencia!')
    let user = db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Usar formato ${Prefijo}${command} [tipo] [cantidad] [número]
ejemplo de uso:

${Prefijo}${command} bkoins 9999 @5218451003894

📍 Artículos transferibles
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('Etiqueta a un usuario ó escribe el número!!')
    if (!(who in db.data.users)) return m.reply(`Usuario *${who}* no se encuentra en la base de datos -.-`)
    if (user[type] * 1 < count) return m.reply(`Su *${rpg.emoticon(type)}${type}${special(type)}* es menos que *${count - user[type]}*`)
    let confirm = `
¿Está seguro de que desea transferir *${count}* ${rpg.emoticon(type)}${type}${special(type)} a *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*

Tienes 60 segundos
`.trim()
    let c = NombreDelBot
    conn.sendButton(m.chat, confirm, c, null, [['sip'], ['nop']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('Se acabó el tiempo...'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = db.data.users[sender]
    let _user = db.data.users[to]
    if (/nop/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Rechazado')
    }
    if (/sip/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`Transferencia exitosa *${count}* ${rpg.emoticon(type)}${type}${special(type)} a *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`Error al transferir *${count}* ${rpg.emoticon(type)}${type}${special(type)} a *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transferir']
handler.tags = ['games']
handler.command = /^(transferir)$/i

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['ordinario', 'singular', 'mitico', 'legendario', 'mascota'].includes(b) ? ' Caja' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
