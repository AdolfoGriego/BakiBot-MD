import db from '../lib/database.js'
import { createHash } from 'crypto'

let handler = async function (m, { args }) {
  if (!args[0]) return m.reply('Por favor introduzca su código de registro')
  let user = db.data.users[m.sender]
  let usCode = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== usCode) return m.reply('[ ! ] Codigo de registro incorrecto')
  user.registered = false
  m.reply('[✓] Registro eliminado correctamente 🗑️')
}

handler.help = ['desreg <código de registro>']
handler.tags = ['casual']
handler.command = /^(desreg|unreg)$/i
handler.register = true

export default handler
