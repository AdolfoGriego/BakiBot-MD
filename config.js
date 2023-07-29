import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5218451003894', '𝐀𝐝𝐨𝐥𝐟𝐨𝐆𝐫𝐢𝐞𝐠𝐨', true],
  ['51929972576', 'Ax', true],
  ['15069060942', '𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃', true],
  ['5217122941872', 'Cris Ofc', true],
]
global.suittag =['5218451003894']
global.mods = []
global.prems = ['5218451003894'], 
global.prems = ['15069060942'],
global.APIs = { 

  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
  
global.APIKeys = { 
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

global.packname = '𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃 '
global.author = '𝐀𝐝𝐨𝐥𝐟𝐨𝐆𝐫𝐢𝐞𝐠𝐨'
global.vs = '1.10.90'
global.version = vs
global.gt = '𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.ig = 'https://www.instagram'
global.hadesig = ig
global.md = 'https://github.com/AdolfoGriego/BakiBot-MD.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/IE8JDcperQi5DxajBIoIhS'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/IE8JDcperQi5DxajBIoIhS
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '*ʀɛsʊʟtaɖօ ɛռċօռtʀaɖօ*'
global.resultado = rg
global.ag = '*⚠️aɖʋɛʀtɛռċɨa⚠️*'
global.advertencia = ag
global.iig = '👨‍💻ɨռʄօʀʍaċɨօռ👨‍💻'
global.informacion = iig
global.fg = '*[❗] ʟօ sɛռtɨʍօs sɛ aɦ ɢɛռɛʀaɖօ ʊռ ɛʀʀօʀ ʋʊɛʟʋa ɨռtɛռtaʀʟօ*'
global.fallo = fg
global.mg = '*[❗] ɛstɛ ċօʍռɖօ ʟօ ɛsta ʊsaռɖօ ɨռċօʀʀɛċtaʍɛռtɛ*'
global.mal = mg
global.eeg = '*su яєpoяţє һѧ sıԀo єňνıѧԀo*'
global.envio = eeg
global.eg = '*ʀɛsʊʟtaɖօ ɛռċօռtʀaɖօ*'
global.exito = eg

global.wm = '𝐀𝐝𝐨𝐥𝐟𝐨𝐆𝐫𝐢𝐞𝐠𝐨\n𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃'
global.igfg = '𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃
global.wait = '⌛ċaʀɢaռɖօ ɛsքɛʀa ʊռ ʍօʍɛռtօ..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./views/grupo.jpg')
global.imagen2 = fs.readFileSync('./views/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./views/bot.jpg')
global.imagen4 = fs.readFileSync('./views/nuevobot.jpg')
global.mods = [] 

global.multiplier = 65

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
