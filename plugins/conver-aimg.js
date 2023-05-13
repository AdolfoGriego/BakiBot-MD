import { spawn } from 'child_process'
import { format } from 'util'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!global.support.convert &&
        !global.support.magick &&
        !global.support.gm) return handler.disabled = false // Disable if doesnt support
    if (!m.quoted) return m.reply(`*✳️ Responda un sticker usando el comando:*\n\n📌 ${usedPrefix + command}\n`)
    let q = m.quoted
    if (/sticker/.test(q.mediaType)) {
        let sticker = await q.download()
        if (!sticker) throw sticker
        if (!q.isAnimated == false) return m.reply(`*[ ! ]* Solo stickers estáticos`)
        let bufs = []
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
        let im = spawn(_spawnprocess, _spawnargs)
        im.on('error', e => m.reply(format(e)))
        im.stdout.on('data', chunk => bufs.push(chunk))
        im.stdin.write(sticker)
        im.stdin.end()
        im.on('exit', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'image.png', NombreDelBot, m)
            reacMoji(m.chat,conn,'🛠️',m)
        })
    } else return m.reply(`*Responda a una imagen usando el comando:*\n\n📌 ${usedPrefix + command}\n`)
}

handler.help = ['aimg']
handler.tags = ['conversor']
handler.command = /^(aimg|toimg)$/i

export default handler
