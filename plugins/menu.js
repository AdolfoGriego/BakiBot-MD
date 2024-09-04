const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
//if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Managua').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'

/*conn.fakeReply(m.chat, `*✨ 𝙀𝙋𝙀𝙍𝘼 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 .*\n\n> No hagas spam de comandos`, '0@s.whatsapp.net', '𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝙈𝙀𝙉𝙐 ⌛')*/

let submenu = `
┏━━━━━━━━━━━━━━━┓  
┃     *𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃*
┗━━━━━━━━━━━━━━━┛  
┏━━━━━━━━━━━━━━━┓  
┃ **Usuario:** ${pushname}  
┃ **Límite:** ${user.limit}  
┃ **Nivel:** ${user.level}  
┃ **Rol:** ${user.role}  
┃ **Experiencia:** ${user.exp}  
┃ **Monedas:** ${user.money}  
┗━━━━━━━━━━━━━━━┛  
┏━━━━━━━━━━━━━━━┓  
┃ **Registro:** ${rtotalreg} de ${totalreg}  
┗━━━━━━━━━━━━━━━┛`

let descargar = `
┏━━━━━━━━━━━━━━━┓  
 🚀 *ＭＥＮＵ ＤＥＳＣＡＲＧＡＳ* 🚀  
┗━━━━━━━━━━━━━━━┛  
┏━━━━━━━━━━━━━━━┓  
┣➣${prefix}𝙥𝙡𝙖𝙮 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙢𝙪𝙨𝙞𝙘𝙖)_  
┣➣${prefix}𝙥𝙡𝙖𝙮2 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤)_  
┣➣${prefix}𝙥𝙡𝙖𝙮.1 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙢𝙪𝙨𝙞𝙘𝙖)_  
┣➣${prefix}𝙥𝙡𝙖𝙮.2 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤)_  
┣➣${prefix}𝙢𝙪𝙨𝙞𝙘𝙖  
┣➣${prefix}𝙫𝙞𝙙𝙚𝙤  
┣➣${prefix}𝙥𝙡𝙖𝙮𝙙𝙤𝙘  
┣➣${prefix}𝙥𝙡𝙖𝙮3 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙖𝙪𝙙𝙞𝙤 𝙚𝙣 𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤)_  
┣➣${prefix}𝙥𝙡𝙖𝙮4 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤 𝙚𝙣 𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤)_  
┣➣${prefix}𝙮𝙩𝙨 _(𝙗𝙪𝙨𝙘𝙖𝙙𝙤𝙧 𝙙𝙚 𝙮𝙤𝙪𝙩𝙪𝙗𝙚)_  
┣➣${prefix}𝙮𝙩𝙢𝙥3 _(𝙡𝙞𝙣𝙠 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙖𝙪𝙙𝙞𝙤)_  
┣➣${prefix}𝙮𝙩𝙢𝙥4 _(𝙡𝙞𝙣𝙠 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤)_  
┣➣${prefix}𝙨𝙥𝙤𝙩𝙞𝙛𝙮  
┣➣${prefix}𝙢𝙪𝙨𝙞𝙘 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙢𝙪𝙨𝙞𝙘𝙖 𝙙𝙚 𝙎𝙥𝙤𝙩𝙞𝙛𝙮)_  
┣➣${prefix}𝙜𝙞𝙩𝙘𝙡𝙤𝙣𝙚 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙙𝙚 𝙂𝙞𝙩𝙃𝙪𝙗)_  
┣➣${prefix}𝙩𝙞𝙠𝙩𝙤𝙠 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠)_  
┣➣${prefix}𝙩𝙞𝙠𝙩𝙤𝙠𝙞𝙢𝙜  
┣➣${prefix}𝙩𝙩𝙞𝙢𝙜 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙞𝙢𝙖𝙜𝙚𝙣 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠)_  
┣➣${prefix}𝙞𝙜𝙨𝙩𝙖𝙡𝙠 _(𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙄𝙂)_  
┣➣${prefix}𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠  
┣➣${prefix}𝙛𝙗 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠)_  
┣➣${prefix}𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢  
┣➣${prefix}𝙞𝙜 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢)_  
┣➣${prefix}𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙙𝙚 𝙈𝙚𝙙𝙞𝙖𝙁𝙞𝙧𝙚)_  
┣➣${prefix}𝙩𝙞𝙠𝙩𝙤𝙠𝙨𝙩𝙖𝙡𝙠 _(𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠)_  
┣➣${prefix}𝙩𝙬𝙞𝙩𝙩𝙚𝙧  
┣➣${prefix}𝙭 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙏𝙬𝙞𝙩𝙩𝙚𝙧 (𝙓)_  
┣➣${prefix}𝙜𝙙𝙧𝙞𝙫𝙚 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙙𝙚 𝙂𝘿𝙧𝙞𝙫𝙚)_  
┗━━━━━━━━━━━━━━━┛`

let grupos = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🔰 ＭＥＮＵ ＰＡＲＡ ⃐ＧＲＵＰＯＳ 🔰*
┊┃━━━━━━━━━━━━━━•
┊┃𝐺𝑒𝑠𝑡𝑖𝑜𝑛𝑎 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜 𝑐𝑜𝑛  ✨ 𝐚𝐧𝐬í-𝐁𝐎𝐓 ✨
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑤𝑒𝑙𝑐𝑜𝑚𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑒𝑛𝑙𝑎𝑐𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑘𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑎𝑟𝑎𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑜𝑥𝑖𝑐 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘2 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑤𝑖𝑡𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑖𝑘𝑡𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑖𝑘𝑇𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑡𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝑖𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑏 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝑖𝐹𝑎𝑐𝑒𝐵𝑜𝑜𝑘 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝑖𝐼𝑔 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑦𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝐴𝑛𝑡𝑖𝑌𝑜𝑢𝑡𝑢𝑏𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑢𝑡𝑜𝑑𝑒𝑡𝑒𝑐𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑛𝑠𝑓𝑤 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑚𝑜𝑑𝑜𝑐𝑎𝑙𝑖𝑒𝑛𝑡𝑒 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑚𝑜𝑑𝑜𝑎𝑑𝑚𝑖𝑛 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑢𝑑𝑖𝑜𝑠 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑐ℎ𝑎𝑡𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑢𝑡𝑜𝑙𝑒𝑣𝑒𝑙𝑢𝑝 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑢𝑡𝑜𝑛𝑖𝑣𝑒𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑑𝑑𝑟𝑢𝑙𝑒𝑠 _(𝑡𝑒𝑥𝑡)_
┊┣➣ ${prefix}𝑠𝑒𝑡𝑟𝑢𝑙𝑒𝑠 _(𝑡𝑒𝑥𝑡)_
┊┣➣ ${prefix}𝑟𝑢𝑙𝑒𝑠 _(𝑟𝑒𝑔𝑙𝑎𝑠 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┣➣ ${prefix}𝑘𝑖𝑐𝑘 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑎𝑑𝑑 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑖𝑛𝑣𝑖𝑡𝑎 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑝𝑟𝑜𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑑𝑒𝑚𝑜𝑡𝑒 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑖𝑛𝑓𝑜𝑔𝑟𝑢𝑝𝑜
┊┣➣ ${prefix}𝑔𝑟𝑜𝑢𝑝𝑖𝑛𝑓𝑜
┊┣➣ ${prefix}𝑎𝑑𝑚𝑖𝑛𝑠 _(𝑖𝑛𝑣𝑜𝑐𝑎𝑟 𝑎 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑠)_
┊┣➣ ${prefix}𝑔𝑟𝑢𝑝𝑜 _(𝑐𝑙𝑜𝑠𝑒/𝑜𝑝𝑒𝑛)_
┊┣➣ ${prefix}𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑢𝑛𝑤𝑎𝑟𝑛 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑞𝑢𝑖𝑡𝑎𝑟𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┣➣ ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑐 _(𝑐𝑎𝑚𝑏𝑖𝑎 𝑙𝑎 𝑑𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖𝑜𝑛 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┣➣ ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑟𝑜𝑢𝑝 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┣➣ ${prefix}𝑎𝑛𝑢𝑙𝑎𝑟𝑙𝑖𝑛𝑘
┊┣➣ ${prefix}𝑟𝑒𝑠𝑒𝑡𝑙𝑖𝑛𝑘 _(𝑟𝑒𝑠𝑡𝑎𝑏𝑙𝑒𝑐𝑒𝑟 𝑒𝑙 𝑙𝑖𝑛𝑘 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜)_
┊┣➣ ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 _(𝑒𝑡𝑖𝑞𝑢𝑒𝑡𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑛 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒)_
┊┣➣ ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙
┊┣➣ ${prefix}𝑖𝑛𝑣𝑜𝑐𝑎𝑟 _(𝑖𝑛𝑣𝑜𝑐𝑎𝑟 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑒𝑛 𝑢𝑛𝑎 𝑙𝑖𝑠𝑡𝑎)_
┊┣➣ ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒 _(𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑜𝑛𝑙𝑖𝑛𝑒)_
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`

let buscadores = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🔎 ＭＥＮＵ ＢＵＳＣＡＤＯＲＥＳ 🔎*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑔𝑜𝑜𝑔𝑙𝑒 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
┊┣➣ ${prefix}𝑐ℎ𝑎𝑡𝑔𝑝𝑡
┊┣➣ ${prefix}𝑖𝑎 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑐𝑜𝑛 𝑙𝑎 𝐼𝐴)_
┊┣➣ ${prefix}𝑏𝑎𝑟𝑑 _(𝑏𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛)_
┊┣➣ ${prefix}𝑖𝑚𝑎𝑔𝑒𝑛 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑒𝑛 𝑔𝑜𝑜𝑔𝑙𝑒)_
┊┣➣ ${prefix}𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 _(𝑡𝑟𝑎𝑑𝑢𝑐𝑖𝑟 𝑎𝑙𝑔𝑢𝑛 𝑡𝑒𝑥𝑡𝑜)_
┊┣➣ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 _(𝑖𝑚𝑎𝑔𝑒𝑛 𝑑𝑒 𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟)_
┊┣➣ ${prefix}𝑠𝑠 _(𝑙𝑖𝑛𝑘)_
┊┣➣ ${prefix}𝑑𝑎𝑙𝑙-𝑒
┊┣➣ ${prefix}𝑝𝑖𝑛𝑡𝑒𝑟𝑒𝑠𝑡
┊┣➣ ${prefix}𝑤𝑖𝑘𝑖𝑝𝑒𝑑𝑖𝑎
┊┣➣ ${prefix}𝑤𝑖𝑘𝑖
┊┣➣ ${prefix}𝑖𝑎2 _(𝑐𝑟𝑒𝑎𝑟 𝑖𝑚𝑎𝑔𝑒𝑛 𝑐𝑜𝑛 𝑙𝑎 (𝐼𝐴)_
┊┣➣ ${prefix}𝑛𝑝𝑚𝑠𝑒𝑎𝑟𝑐ℎ _(𝐵𝑢𝑠𝑐𝑎𝑟 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑑𝑒 𝑁𝑃𝑀)_
┊┣➣ ${prefix}𝑠𝑡𝑦𝑙𝑒𝑡𝑒𝑥𝑡 _(𝐺𝑒𝑛𝑒𝑟𝑎𝑙 𝑑𝑖𝑠𝑒ñ𝑜𝑠 𝑑𝑒 𝑙𝑒𝑡𝑟𝑎𝑠)_
┊┣➣ ${prefix}ℎ𝑜𝑟𝑎𝑟𝑖𝑜
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let juegos = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *👾 ＭＥＮＵ ＪＵＥＧＯＳ 👾*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑠𝑖𝑚𝑖 _(ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑒𝑙 𝑏𝑜𝑡)_
┊┣➣ ${prefix}𝑝𝑝𝑡 _(𝑝𝑖𝑒𝑑𝑟𝑎, 𝑝𝑎𝑝𝑒𝑙, 𝑜 𝑡𝑖𝑗𝑒𝑟𝑎)_
┊┣➣ ${prefix}𝑔𝑎𝑦 @𝑡𝑎𝑔
┊┣➣ ${prefix}𝑝𝑎𝑟𝑒𝑗𝑎 @𝑡𝑎𝑔
┊┣➣ ${prefix}𝑙𝑜𝑣𝑒 @𝑡𝑎𝑔
┊┣➣ ${prefix}𝑓𝑜𝑙𝑙𝑎𝑟 @𝑡𝑎𝑔
┊┣➣ ${prefix}𝑡𝑜𝑝𝑔𝑎𝑦𝑠
┊┣➣ ${prefix}𝑡𝑜𝑝𝑜𝑡𝑎𝑘𝑢𝑠
┊┣➣ ${prefix}𝑡𝑜𝑝
┊┣➣ ${prefix}𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎
┊┣➣ ${prefix}𝑣𝑒𝑟𝑑𝑎𝑑
┊┣➣ ${prefix}𝑟𝑒𝑡𝑜
┊┣➣ ${prefix}𝑑𝑜𝑥𝑒𝑎𝑟
┊┣➣ ${prefix}𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑙𝑖𝑑𝑎𝑑
┊┣➣ ${prefix}𝑟𝑎𝑐𝑖𝑠𝑡𝑎
┊┣➣ ${prefix}𝑠𝑙𝑜𝑡
┊┣➣ ${prefix}𝑚𝑎𝑡ℎ
┊┣➣ ${prefix}𝑚𝑎𝑡𝑒𝑚𝑎𝑡𝑖𝑐𝑎𝑠
┊┣➣ ${prefix}𝑡𝑡𝑡
┊┣➣ ${prefix}𝑡𝑖𝑐𝑡𝑎𝑐𝑡𝑜𝑒
┊┣➣ ${prefix}𝑡𝑡𝑐
┊┣➣ ${prefix}𝑑𝑒𝑙𝑡𝑡𝑡
┊┣➣ ${prefix}𝑑𝑎𝑑𝑜
┊┣➣ ${prefix}𝑝𝑖𝑟𝑜𝑝𝑜
┊┣➣ ${prefix}𝑠ℎ𝑖𝑝
┊┣➣ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑡𝑟𝑖𝑜
┊┣➣ ${prefix}𝑓𝑜𝑟𝑚𝑎𝑟𝑝𝑎𝑟𝑒𝑗𝑎
┊┣➣ ${prefix}𝑡𝑥𝑡 _(𝑡𝑒𝑥𝑡𝑜)_
┊┣➣ ${prefix}𝑓𝑎𝑘𝑒 _(𝑡𝑒𝑥𝑡𝑜 + 𝑡𝑎𝑔)_
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let efecto = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🎤 ＭＥＮＵ ＤＥ ＥＦＥＣＴＯＳ 🎤*
┊┃━━━━━━━━━━━━━━•
┊┃ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝑈𝑁 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑏𝑎𝑠𝑠
┊┣➣ ${prefix}𝑏𝑙𝑜𝑤𝑛
┊┣➣ ${prefix}𝑑𝑒𝑒𝑝
┊┣➣ ${prefix}𝑒𝑎𝑟𝑟𝑎𝑝𝑒
┊┣➣ ${prefix}𝑓𝑎𝑠𝑡
┊┣➣ ${prefix}𝑓𝑎𝑡
┊┣➣ ${prefix}𝑛𝑖𝑔ℎ𝑡𝑐𝑜𝑟𝑒
┊┣➣ ${prefix}𝑟𝑒𝑣𝑒𝑟𝑠𝑒
┊┣➣ ${prefix}𝑟𝑜𝑏𝑜𝑡
┊┣➣ ${prefix}𝑠𝑙𝑜𝑤
┊┣➣ ${prefix}𝑠𝑚𝑜𝑜𝑡ℎ
┊┣➣ ${prefix}𝑠𝑞𝑢𝑖𝑟𝑟𝑒𝑙
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let convertidores = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🧧ＭＥＮＵ ＣＯＮＶＥＲＴＩＤＯＲＥＳ 🧧*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑡𝑜𝑢𝑟𝑙
┊┣➣ ${prefix}𝑡𝑡𝑠
┊┣➣ ${prefix}𝑡𝑜𝑚𝑝3
┊┣➣ ${prefix}𝑡𝑜𝑖𝑚𝑔
┊┣➣ ${prefix}𝑡𝑜𝑎𝑢𝑑𝑖𝑜
┊┣➣ ${prefix}𝑡𝑜𝑎𝑛𝑖𝑚𝑒
┊┣➣ ${prefix}ℎ𝑑
┊┣➣ ${prefix}𝑙𝑜𝑔𝑜𝑠
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menu18 = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🥵 ＭＥＮＵ +18 🥵*
┊┃━━━━━━━━━━━━━━•
┊┃ *𝑁𝑜𝑡𝑎: 𝑢𝑠𝑎𝑟𝑙𝑜 𝑏𝑎𝑗𝑎 𝑡𝑢 𝑟𝑒𝑠𝑝𝑜𝑛𝑠𝑎𝑏𝑖𝑙𝑖𝑑𝑎𝑑*
┊┃ *𝑁𝑜 𝑠𝑒𝑎 𝑝𝑎𝑗𝑒𝑟𝑜*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑝𝑢𝑠𝑠𝑦
┊┣➣ ${prefix}𝑛𝑠𝑓𝑤𝑙𝑜𝑙𝑖
┊┣➣ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖
┊┣➣ ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖2
┊┣➣ ${prefix}𝑝𝑎𝑐𝑘
┊┣➣ ${prefix}𝑝𝑎𝑐𝑘2
┊┣➣ ${prefix}𝑝𝑎𝑐𝑘3
┊┣➣ ${prefix}𝑐ℎ𝑖𝑛𝑎
┊┣➣ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥
┊┣➣ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑥𝑥𝑥𝑙𝑒𝑠𝑏𝑖
┊┣➣ ${prefix}𝑝𝑜𝑟𝑛𝑜𝑙𝑒𝑠𝑏𝑖𝑎𝑛𝑎𝑣𝑖𝑑
┊┣➣ ${prefix}𝑣𝑖𝑑𝑒𝑜𝑙𝑒𝑠𝑏𝑖𝑥𝑥𝑥
┊┣➣ ${prefix}𝑝𝑜𝑟𝑛𝑜
┊┣➣ ${prefix}𝑙𝑒𝑤𝑑
┊┣➣ ${prefix}𝑓𝑒𝑒𝑑
┊┣➣ ${prefix}𝑔𝑎𝑠𝑚
┊┣➣ ${prefix}𝑎𝑛𝑎𝑙
┊┣➣ ${prefix}ℎ𝑜𝑙𝑜
┊┣➣ ${prefix}𝑡𝑖𝑡𝑠
┊┣➣ ${prefix}𝑘𝑢𝑛𝑖
┊┣➣ ${prefix}𝑘𝑖𝑠𝑠
┊┣➣ ${prefix}𝑒𝑟𝑜𝑘
┊┣➣ ${prefix}𝑠𝑚𝑢𝑔
┊┣➣ ${prefix}𝑠𝑜𝑙𝑜𝑔
┊┣➣ ${prefix}𝑓𝑒𝑒𝑡𝑔
┊┣➣ ${prefix}𝑙𝑒𝑤𝑑𝑘
┊┣➣ ${prefix}𝑓𝑒𝑚𝑑𝑜𝑚
┊┣➣ ${prefix}𝑐𝑢𝑑𝑑𝑙𝑒
┊┣➣ ${prefix}𝑒𝑟𝑜𝑦𝑢𝑟𝑖
┊┣➣ ${prefix}𝑐𝑢𝑚
┊┣➣ ${prefix}𝑏𝑙𝑜𝑤𝑗𝑜𝑏
┊┣➣ ${prefix}ℎ𝑜𝑙𝑜𝑒𝑟𝑜
┊┣➣ ${prefix}𝑒𝑟𝑜𝑘𝑒𝑚𝑜
┊┣➣ ${prefix}𝑓𝑜𝑥_𝑔𝑖𝑟𝑙
┊┣➣ ${prefix}𝑓𝑢𝑡𝑎𝑛𝑎𝑟𝑖
┊┣➣ ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menurandow = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *⛩️ ＭＥＮＵ ＲＡＮＤＯＭ ⛩️*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑚𝑒𝑚𝑒𝑠
┊┣➣ ${prefix}ℎ𝑜𝑟𝑛𝑦
┊┣➣ ${prefix}𝑠𝑖𝑚𝑝
┊┣➣ ${prefix}𝑙𝑜𝑙𝑖𝑐𝑒
┊┣➣ ${prefix}𝑐𝑜𝑚𝑒𝑛𝑡𝑎𝑟
┊┣➣ ${prefix}𝑐𝑜𝑚𝑚𝑒𝑛𝑡
┊┣➣ ${prefix}𝑙𝑜𝑙𝑖
┊┣➣ ${prefix}𝑙𝑜𝑙𝑖𝑣𝑖𝑑
┊┣➣ ${prefix}𝑛𝑒𝑘𝑜
┊┣➣ ${prefix}𝑤𝑎𝑖𝑓𝑢
┊┣➣ ${prefix}𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘
┊┣➣ ${prefix}𝑛𝑎𝑣𝑖𝑑𝑎𝑑
┊┣➣ ${prefix}𝑎𝑘𝑖𝑟𝑎
┊┣➣ ${prefix}𝑎𝑘𝑖𝑦𝑎𝑚𝑎
┊┣➣ ${prefix}𝑐ℎ𝑖𝑛𝑎
┊┣➣ ${prefix}𝑎𝑛𝑛𝑎
┊┣➣ ${prefix}𝑎𝑠𝑢𝑛𝑎
┊┣➣ ${prefix}𝑎𝑦𝑢𝑧𝑎𝑤𝑎
┊┣➣ ${prefix}𝑏𝑜𝑟𝑢𝑡𝑜
┊┣➣ ${prefix}𝑐ℎ𝑖ℎ𝑜
┊┣➣ ${prefix}𝑐ℎ𝑖𝑡𝑜𝑔𝑒
┊┣➣ ${prefix}𝑑𝑒𝑖𝑑𝑎𝑟𝑎
┊┣➣ ${prefix}𝑒𝑟𝑧𝑎
┊┣➣ ${prefix}𝑒𝑙𝑎𝑖𝑛𝑎
┊┣➣ ${prefix}𝑒𝑏𝑎
┊┣➣ ${prefix}𝑒𝑚𝑖𝑙𝑖𝑎
┊┣➣ ${prefix}ℎ𝑒𝑠𝑡𝑖𝑎
┊┣➣ ${prefix}ℎ𝑖𝑛𝑎𝑡𝑎
┊┣➣ ${prefix}𝑖𝑛𝑜𝑟𝑖
┊┣➣ ${prefix}𝑖𝑠𝑢𝑧𝑢
┊┣➣ ${prefix}𝑖𝑡𝑎𝑐ℎ𝑖
┊┣➣ ${prefix}𝑖𝑡𝑜𝑟𝑖
┊┣➣ ${prefix}𝑘𝑎𝑔𝑎
┊┣➣ ${prefix}𝑘𝑎𝑔𝑢𝑟𝑎
┊┣➣ ${prefix}𝑘𝑎𝑜𝑟𝑖
┊┣➣ ${prefix}𝑘𝑒𝑛𝑒𝑘𝑖
┊┣➣ ${prefix}𝑘𝑜𝑡𝑜𝑟𝑖
┊┣➣ ${prefix}𝑘𝑢𝑟𝑢𝑚𝑖
┊┣➣ ${prefix}𝑚𝑎𝑑𝑎𝑟𝑎
┊┣➣ ${prefix}𝑚𝑖𝑘𝑎𝑠𝑎
┊┣➣ ${prefix}𝑚𝑖𝑘𝑢
┊┣➣ ${prefix}𝑚𝑖𝑛𝑎𝑡𝑜
┊┣➣ ${prefix}𝑛𝑎𝑟𝑢𝑡𝑜
┊┣➣ ${prefix}𝑛𝑒𝑧𝑢𝑘𝑜
┊┣➣ ${prefix}𝑠𝑎𝑔𝑖𝑟𝑖
┊┣➣ ${prefix}𝑠𝑎𝑠𝑢𝑘𝑒
┊┣➣ ${prefix}𝑠𝑎𝑘𝑢𝑟𝑎
┊┣➣ ${prefix}𝑐𝑜𝑠𝑝𝑙𝑎𝑦
┊┣➣ ⊱⋅ ──────────── ⋅⊰
┊┣➣  𝑀𝐴𝑆 𝑅𝐴𝑁𝐷𝑂𝑀 𝐴Ñ𝐴𝐷𝐼𝐷𝑂𝑆 𝑃𝑂𝑅 𝐸𝐿𝐼𝐴𝑆𝐴𝑅 𝑌𝑇  
┊┣➣ ${prefix}𝑎𝑙𝑔𝑢𝑖𝑒𝑛
┊┣➣ ${prefix}𝑛𝑎𝑡𝑢𝑟𝑎𝑙𝑒𝑧𝑎
┊┣➣ ${prefix}𝑐𝑜𝑐𝑜
┊┣➣ ${prefix}𝑤𝑒𝑏𝑎𝑑𝑎𝑠
┊┣➣ ${prefix}𝑟𝑖𝑒
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`


let menuRPG = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🪙 ＭＥＮＵ ＲＰＧ / ＥＣＯＮＯＭＩＡ*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑚𝑖𝑛𝑎𝑟 _(𝑝𝑎𝑟𝑎 𝑚𝑖𝑛𝑎𝑟 𝑒𝑥𝑝)_
┊┣➣ ${prefix}𝑟𝑜𝑏𝑎𝑟
┊┣➣ ${prefix}𝑟𝑜𝑏 _(𝑟𝑜𝑏𝑎 𝑒𝑥𝑝 𝑎𝑙𝑔𝑢𝑛 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠)_
┊┣➣ ${prefix}𝑐𝑟𝑖𝑚𝑒
┊┣➣ ${prefix}𝑡𝑟𝑎𝑏𝑎𝑗𝑎𝑟
┊┣➣ ${prefix}𝑤𝑜𝑟𝑘 _(𝑐𝑟𝑎𝑏𝑎𝑗𝑎 𝑦 𝑔𝑎𝑛𝑎𝑠 𝑒𝑥𝑝)_
┊┣➣ ${prefix}𝑏𝑢𝑦 _(𝑐𝑜𝑚𝑝𝑟𝑎𝑟 𝑚𝑎𝑠 𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 (𝑙𝑖𝑚𝑖𝑡)_
┊┣➣ ${prefix}𝑏𝑎𝑙
┊┣➣ ${prefix}𝑏𝑎𝑙𝑎𝑐𝑒 _(𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒/𝑒𝑥𝑝 𝑡𝑒𝑛𝑒𝑠)_
┊┣➣ ${prefix}𝑐𝑙𝑎𝑖𝑚 _(𝑟𝑒𝑐𝑜𝑔𝑒𝑟 𝑡𝑢 𝑟𝑒𝑐𝑜𝑚𝑝𝑒𝑛𝑠𝑎)_
┊┣➣ ${prefix}𝑙𝑏
┊┣➣ ${prefix}𝑙𝑒𝑎𝑑𝑒𝑟𝑏𝑜𝑎𝑟𝑑
┊┣➣ ${prefix}𝑐𝑜𝑓𝑟𝑒
┊┣➣ ${prefix}𝑝𝑒𝑟𝑓𝑖𝑙
┊┣➣ ${prefix}𝑛𝑖𝑣𝑒𝑙
┊┣➣ ${prefix}𝑑𝑒𝑝
┊┣➣ ${prefix}𝑑𝑒𝑝𝑜𝑠𝑖𝑡𝑎𝑟
┊┣➣ ${prefix}𝑟𝑒𝑡𝑖𝑟𝑎𝑟
┊┣➣ ${prefix}𝑡𝑜𝑟𝑒𝑚𝑜𝑣𝑒
┊┣➣ ${prefix}𝑙𝑒𝑣𝑒𝑙𝑢𝑝
┊┣➣ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑖𝑟
┊┣➣ ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟
┊┣➣ ${prefix}𝑎𝑓𝑘 
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuSticker= `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *👽 ＭＥＮＵ ＳＴＩＣＫＥＲ 👽*
┊┃━━━━━━━━━━━━━━•
┊┃ *(𝐶𝑟𝑒𝑎𝑟 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑑𝑒𝑠𝑑𝑒 𝑤ℎ𝑎𝑡𝑠𝑎𝑝𝑝 𝑐𝑜𝑛 𝑁𝑜𝑣𝑎𝐵𝑜𝑡)*
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑠
┊┣➣ ${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟 
┊┣➣ ${prefix}𝑤𝑚
┊┣➣ ${prefix}𝑎𝑡𝑡𝑝
┊┣➣ ${prefix}𝑞𝑐
┊┣➣ ${prefix}𝑒𝑚𝑜𝑗𝑖𝑚𝑖𝑥
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuOwner = `┏┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *👑 ＭＥＮＵ ＯＷＮＥＲ 👑*
┊┃━━━━━━━━━━━━━━•
┊┃ _(𝐶𝑜𝑚𝑎𝑛𝑑𝑜 𝑒𝑥𝑐𝑙𝑢𝑠𝑖𝑣𝑜 𝑝𝑎𝑟𝑎 𝑝𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜/𝑜𝑤𝑛𝑒𝑟 𝑑𝑒𝑙 𝑏𝑜𝑡)_
┊┃━━━━━━━━━━━━━━•
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑐𝑎𝑙𝑙 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑙𝑙𝑎𝑚𝑎𝑑𝑎 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑣 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑛𝑡𝑖𝑝𝑟𝑖𝑣𝑎𝑑𝑜 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎𝑢𝑡𝑜𝑟𝑒𝑎𝑑 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑚𝑜𝑑𝑜𝑗𝑎𝑑𝑖𝑏𝑜𝑡 _(𝑜𝑛/𝑜𝑓𝑓)_
┊┣➣ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑎𝑑𝑑𝑙𝑖𝑚𝑖𝑡 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑑𝑎𝑟𝑑𝑖𝑎𝑚𝑎𝑛𝑡𝑒𝑠 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑎ñ𝑎𝑑𝑖𝑟𝑥𝑝 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑎𝑑𝑑𝑥𝑝 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑢𝑛𝑏𝑎𝑛𝑢𝑠𝑒𝑟 _(@𝑡𝑎𝑔)_
┊┣➣ ${prefix}𝑎𝑢𝑡𝑜𝑎𝑑𝑚𝑖𝑛 
┊┣➣ ${prefix}𝑛𝑢𝑒𝑣𝑜𝑛𝑜𝑚𝑏𝑟𝑒
┊┣➣ ${prefix}𝑏𝑜𝑡𝑛𝑎𝑚𝑒 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑒𝑙 𝑛𝑎𝑚𝑒 𝑑𝑒𝑙 𝑏𝑜𝑡)_
┊┣➣ ${prefix}𝑛𝑢𝑒𝑣𝑎𝑓𝑜𝑡𝑜
┊┣➣ ${prefix}𝑠𝑒𝑝𝑝𝑏𝑜𝑡
┊┣➣ ${prefix}𝑓𝑜𝑡𝑜𝑏𝑜𝑡 _(𝑐𝑎𝑚𝑏𝑖𝑎𝑟 𝑙𝑎 𝑓𝑜𝑡𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡)_
┊┣➣ ${prefix}𝑏𝑐 (𝑑𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑎 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑐ℎ𝑎𝑡)
┊┣➣ ${prefix}𝑏𝑐𝑔𝑐 (𝑑𝑖𝑓𝑢𝑠𝑖𝑜𝑛 𝑠𝑜𝑙𝑜 𝑎 𝑔𝑟𝑢𝑝𝑜𝑠)
┊┣➣ ${prefix}𝑝𝑢𝑏𝑙𝑖𝑐 (𝑚𝑜𝑑𝑜 𝑝𝑢𝑏𝑙𝑖𝑐𝑜) 
┊┣➣ ${prefix}𝑝𝑟𝑖𝑣𝑎𝑑𝑜 (𝑚𝑜𝑑𝑜 𝑝𝑟𝑖𝑣𝑎𝑑𝑜) 
┊┣➣ ${prefix}𝑔𝑒𝑡𝑐𝑎𝑠𝑒
┊┣➣ ${prefix}𝑓𝑒𝑡𝑐ℎ
┊┣➣ ${prefix}𝑢𝑝𝑑𝑎𝑡𝑒
┊┣➣ ${prefix}𝑟𝑒𝑠𝑡𝑎𝑟𝑡 
┊┣➣ ${prefix}𝑟𝑒𝑖𝑛𝑖𝑐𝑖𝑎𝑟
┊┣➣ $ 
┊┣➣ >
┊┣➣ => 
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`


if (command === 'menu' || command === 'help') {
m.react('👨🏻‍💻');
let son = `┏━━━━━━━━━━━━━━━┓  
┃ *𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃*  
╰━━━━━━━━━━━━━━━┛  
┏━━━━━━━━━━━━━━━┓  
 **Comandos Disponibles:**  
┃ ${prefix}creador 
┃ ${prefix}allmenu
┃ ${prefix}help
┗━━━━━━━━━━━━━━━┛`;

      
       conn.sendButton(m.chat, submenu, son, vid1, 
        [['𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎', `${prefix}menu1`], 
         ['𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊', `${prefix}allmenu`], 
         ['𝙋𝙍𝙐𝙀𝘽𝘼 𝘿𝙀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿', `${prefix}status`],
         ['𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍', `${prefix}reg ${pushname}.34`]], 
        null, null, m);
}

/*if (command == 'help') {
m.react('✨️') 
let saludos = `~ Hola ${pushname} ${user.registered === true ? '✓' : ''}`
let menu = `
┏━━━━━━━✦✗✦━━━━━━━━┓
┃ ${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻┃
┗━━━━━━━✦✗✦━━━━━━━━┛
┏══━━━━✥◈✥━━━━══┓
┃    ℹ️𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ℹ️      ┃
┗══━━━━✥◈✥━━━━══┛
┏━━━━━━━༺༻━━━━━━━┓
┣➣ ${name}  ${creador}
┣➣ ${lenguaje.menu.text} [ ${prefix} ]
┣➣ ${lenguaje.menu.text2} ${date}
┣➣ ${lenguaje.menu.text3} ${time}
┣➣ ${lenguaje.menu.text4} ${vs}
┣➣ ${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
┣➣ ${lenguaje.menu.text6} ${runtime(process.uptime())}
┣➣ ${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
┣➣ ${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt}` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
┗━━━━━━━༺༻━━━━━━━┛
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
 💻 𝑰𝑵𝑭𝑶 𝑫𝑬𝑳 𝑼𝑺𝑼𝑨𝑹𝑰𝑶  💻
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
┏━━━•━•━━•━━•━━━•━━┓
┣➣ ${lenguaje.menu.text8} ${user.limit}
┣➣ ${lenguaje.menu.text9} ${user.level}
┣➣ ${lenguaje.menu.text10} ${user.role}
┣➣ 🌟 𝑒𝑥𝑝 : ${user.exp}
┣➣ 💰 𝑐𝑜𝑖𝑛𝑠 : ${user.money}
┣➣ ${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
┗━━━•━•━━•━━•━━━•━━┛`
let xd = `${pickRandom([`\`¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐯𝐞𝐫 𝐥𝐨𝐬 𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫? 𝐔𝐬𝐚 ${prefix}𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨𝐬\``, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`💫 INFÓRMATE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUÍ\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repositorio con una estrellita ☺\`\n${md}\``])}`;
let listSections = []    
listSections.push({
title: '🗒️𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝘼𝙉𝙎𝙄 🗒️',
rows: [{ header: "𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", title: "", id: `.allmenu`, description: `Muestra el menu completo\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑", title: "", id: `.menu1`, description: `Muestra el menu de descargas\n`},
{ header: "𝐀𝐔𝐃𝐈𝐎𝐒", title: "", id: `.menu2`, description: `Muestra el menu de audios palabra clave para interactuar con el bot\n` },
{ header: "𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎", title: "", id: `.menu3`, description: `Muestra el menu de gestión del Grupo\n` },
{ header: "𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu4`, description: `Muestra el menu para buscar información\n` },
{ header: "𝐉𝐔𝐄𝐆𝐎𝐒", title: "", id: `.menu5`, description: `Muestra el menu de juegos para divertir tu grupo con multi juegos\n` }, 
{ header: "𝐄𝐅𝐄𝐂𝐓𝐎", title: "", id: `.menu6`, description: `Muestra el menu de efecto\n` }, 
{ header: "𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒", title: "", id: `.menu7`, description: `Muestra el menu de convertidores\n` }, 
{ header: "𝐑𝐀𝐍𝐃𝐎𝐖", title: "", id: `.menu8`, description: `Muestra el menu randow\n` }, 
{ header: "𝐑𝐏𝐆", title: "", id: `.menu9`, description: `Muestra el menu RPG\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑", title: "", id: `.menu10`, description: `Muestra el menu de creación de sticker\n` }, 
{ header: "𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎", title: "", id: `.menu11`, description: `Muestra el menu solo para propietario del bot\n` },
{ header: "𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐈𝐎𝐍𝐄𝐒", title: "", id: `.enable`, description: `configuraciones para mi grupo\n` },
{ header: "𝐌𝐄𝐍𝐔 +𝟏𝟖", title: "", id: `.menu18`, description: `Muestra el menu +18 (usarlo bajo tu responsabilidad)\n` }, 
{ header: "𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒", title: "", id: `.logos`, description: `Muestra la lista para crear logos\n` }
]})

conn.sendList(m.chat, menu, botname, `𝑇𝑂𝐶𝐴 𝐴𝑄𝑈𝐼 ✨`, listSections, {quoted: fkontak})
}

if (command === 'menu' || command === 'Menu') {
    m.react('✨');
    
    // Selecciona una imagen aleatoriamente
    let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);
    
    
    conn.sendButton(m.chat, submenu, menu0, randomImage, 
        [['𝙈𝙀𝙉𝙐 𝙇𝙄𝙎𝙏𝘼', `#help`], 
         ['𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊', `#allmenu`], 
         ['𝙋𝙍𝙐𝙀𝘽𝘼 𝘿𝙀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿', `#ping`],
         ['𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍', `#reg ${pushname}.${nunber}`]], 
        null, null, m);
}*/


if (command === 'menu1' || command === 'descarga') {
    m.react('👤');

    // Selecciona una imagen aleatoriamente
    // let randomImage = pickRandom([img1, img2, img, img3, img4, img5, img6, img7, img8, img9]);

    conn.sendButton(m.chat, submenu, descargar, imagen1, 
        [['𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙋𝙇𝙀𝙏𝙊', '.allmenu'], 
         ['𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 ⚡', '.status']],
        null, null, m);
}



if (command == 'allmenu' || command == 'menucompleto') {
m.react('⏱️') 
let menu = `╔━━━━━━༺ ✘ ༻━━━━━━╗
║◤━━━ 👨🏻‍💻𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃👨🏻‍💻━━━◥
║${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
║✦ ──━━━━✥◈✥━━━━── ✦
║${lenguaje.menu.text} [ ${prefix} ]
║${lenguaje.menu.text2} ${date}
║${lenguaje.menu.text3} ${time}
║${lenguaje.menu.text4} ${vs}
║${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
║${lenguaje.menu.text6} ${runtime(process.uptime())}
║${lenguaje.menu.text7} ${conn.public ? 'público' : 'privado'}
║${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt} ` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
║ 
║${lenguaje.menu.text8} ${user.limit}
║${lenguaje.menu.text9} ${user.level}
║${lenguaje.menu.text10} ${user.role}
║🚀 𝙓𝙋 : ${user.exp}
║⚡ 𝘾𝙊𝙄𝙉𝙎 : ${user.money}
║ 
║${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
║✦ ──━━━━✥◈✥━━━━── ✦
╚══════ ≪ •❈• ≫ ══════╝

◇───────◇───────◇
   *𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃*
◇───────◇───────◇

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ℹ️ ＩＮＦＯＢＯＴ*️⃟ᬽ፝֟━*
┣➣${prefix}𝙧𝙚𝙜 _(𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩)_
┣➣${prefix}𝙪𝙣𝙧𝙚𝙜 _(𝙗𝙤𝙧𝙧𝙖𝙧 𝙨𝙪 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤)_
┣➣${prefix}𝙢𝙮𝙣𝙨 _(𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚)_
┣➣${prefix}𝙚𝙨𝙩𝙖𝙙𝙤 _(𝙚𝙨𝙩𝙖𝙙𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩)_
┣➣${prefix}𝙢𝙚𝙣𝙪2
┣➣${prefix}𝙖𝙪𝙙𝙞𝙤𝙨 
┣➣${prefix}𝙣𝙪𝙚𝙫𝙤 _(𝙣𝙪𝙚𝙫𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤)_
┣➣${prefix}𝙧𝙚𝙜𝙡𝙖𝙨 _(𝙧𝙚𝙜𝙡𝙖𝙨)_
┣➣${prefix}𝙥𝙞𝙣𝙜
┣➣${prefix}𝙫𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙
┣➣${prefix}𝙜𝙧𝙪𝙥𝙤𝙨 _(𝙜𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨)_
┣➣${prefix}𝙟𝙤𝙞𝙣 _(𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙖 𝙪𝙣 𝙗𝙤𝙩 𝙥𝙖𝙧𝙖 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤)_
┣➣${prefix}𝙤𝙬𝙣𝙚𝙧
┣➣${prefix}𝙘𝙧𝙚𝙖𝙙𝙤𝙧 _(𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙤𝙨 𝙙𝙚 𝙢𝙞 𝙘𝙧𝙚𝙖𝙙𝙤𝙧)_
┣➣${prefix}𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧𝙗𝙤𝙩 (𝙏𝙪𝙩𝙤𝙧𝙞𝙖𝙡 𝙙𝙚𝙡 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙘𝙞𝙤𝙣)_
┣➣${prefix}𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙪𝙙
┣➣${prefix}𝙘𝙪𝙚𝙣𝙩𝙖 
┣➣${prefix}𝙘𝙪𝙚𝙣𝙩𝙖𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨
┣➣${prefix}𝙨𝙩𝙖𝙩𝙪𝙨 
┣➣${prefix}𝙧𝙚𝙥𝙤𝙧𝙩 _(𝙧𝙚𝙥𝙤𝙧𝙩𝙖 𝙚𝙧𝙧𝙤𝙧𝙚𝙨)_
━━━━━━━✦✗✦━━━━━━━━࣭۫

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🤖ＪＡＤＩＢＯＴ*️⃟ᬽ፝֟━*
├• *(𝙏𝙞𝙚𝙣𝙚 2 𝙤𝙥𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙝𝙖𝙘𝙚𝙧𝙩𝙚 𝙎𝙪𝙗𝘽𝙤𝙩)*
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *𝙀𝙨𝙘𝙖𝙣𝙚𝙖𝙙𝙤 𝙚𝙡 𝙌𝙍*
┣➣${prefix}serbot
┣➣${prefix}𝙦𝙧
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *𝘾𝙤𝙣 𝙘𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 8 𝙙𝙞𝙜𝙞𝙩𝙤𝙨*
├❥ᰰ${prefix}serbot -- 𝙘𝙤𝙙𝙚
┣➣${prefix}𝙟𝙖𝙙𝙞𝙗𝙤𝙩 --𝙘𝙤𝙙𝙚
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(𝘾𝙤𝙢𝙥𝙧𝙪𝙚𝙗𝙖 𝙨𝙞 𝙝𝙖𝙮 𝙨𝙪𝙗 𝙗𝙤𝙩 𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙙𝙤)*
┣➣${prefix}𝙗𝙤𝙩𝙨 
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
├• *(𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙖𝙧𝙖 𝙡𝙤𝙨 𝙨𝙪𝙗 𝙗𝙤𝙩)*
┣➣  ${prefix}𝙨𝙩𝙤𝙥
┣➣  ${prefix}𝙙𝙚𝙡𝙟𝙖𝙙𝙞𝙗𝙤𝙩
━━━━━━━✦✗✦━━━━━━━━࣭۫

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🔄ＤＥＳＣＡＲＧＡ*️⃟ᬽ፝֟━*
┣➣${prefix}𝙥𝙡𝙖𝙮 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙢𝙪𝙨𝙞𝙘𝙖)_
┣➣${prefix}𝙥𝙡𝙖𝙮2 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤)_
┣➣${prefix}𝙥𝙡𝙖𝙮.1 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙢𝙪𝙨𝙞𝙘𝙖)_
┣➣${prefix}𝙥𝙡𝙖𝙮.2 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤)_
┣➣${prefix}𝙢𝙪𝙨𝙞𝙘𝙖
┣➣${prefix}𝙫𝙞𝙙𝙚𝙤
┣➣${prefix}𝙥𝙡𝙖𝙮𝙙𝙤𝙘
┣➣${prefix}𝙥𝙡𝙖𝙮3 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙖𝙪𝙙𝙞𝙤 𝙚𝙣 𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤)_
┣➣${prefix}𝙥𝙡𝙖𝙮4 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙫𝙞𝙙𝙚𝙤 𝙚𝙣 𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤)_
┣➣${prefix}𝙮𝙩𝙨 _(𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧 𝙙𝙚 𝙮𝙤𝙪𝙩𝙪𝙗𝙚)_
┣➣${prefix}𝙮𝙩𝙢𝙥3 _(𝙡𝙞𝙣𝙠 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙖𝙪𝙙𝙞𝙤)_
┣➣${prefix}𝙮𝙩𝙢𝙥4 _(𝙡𝙞𝙣𝙠 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤)_
┣➣${prefix}𝙨𝙥𝙤𝙩𝙞𝙛𝙮
┣➣${prefix}𝙢𝙪𝙨𝙞𝙘 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙢𝙪𝙨𝙞𝙘𝙖 𝙙𝙚 𝙎𝙥𝙤𝙩𝙞𝙛𝙮)_
┣➣${prefix}𝙜𝙞𝙩𝙘𝙡𝙤𝙣𝙚 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙙𝙚 𝙂𝙞𝙩𝙃𝙪𝙗)_
┣➣${prefix}𝙩𝙞𝙠𝙩𝙤𝙠 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠)_
┣➣${prefix}𝙩𝙞𝙠𝙩𝙤𝙠𝙞𝙢𝙜
┣➣${prefix}𝙩𝙩𝙞𝙢𝙜 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠)_
┣➣${prefix}𝙞𝙜𝙨𝙩𝙖𝙡𝙠 _(𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙞𝙜)_
┣➣${prefix}𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠
┣➣${prefix}𝙛𝙗 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙫𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠)_
┣➣${prefix}𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢
┣➣${prefix}𝙞𝙜 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙫𝙞𝙙𝙚𝙤𝙨 𝙙𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢)_
┣➣${prefix}𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚 _(𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙙𝙚 𝙢𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚)_
┣➣${prefix}𝙜𝙙𝙧𝙞𝙫𝙚 _(𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙙𝙚 𝙜𝙙𝙧𝙞𝙫𝙚)_
*━━━━━━━✦✗✦━━━━━━━━࣭۫*

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔰⃐ＧＲＵＰＯＳ*️⃟ᬽ፝֟━*
├• 𝙂𝙚𝙨𝙩𝙞𝙤𝙣𝙖𝙧 𝙩𝙪 𝙜𝙧𝙪𝙥𝙤 𝙘𝙤𝙣 𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃
├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┣➣${prefix}𝙬𝙚𝙡𝙘𝙤𝙢𝙚 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙚𝙣𝙡𝙖𝙘𝙚 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙛𝙖𝙠𝙚 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙖𝙧𝙖𝙗𝙚 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙩𝙤𝙭𝙞𝙘 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠2 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙞𝙏𝙬𝙞𝙩𝙚𝙧 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙩𝙞𝙠𝙩𝙤𝙠 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙞𝙏𝙞𝙠𝙏𝙤𝙠 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙩𝙚𝙡𝙚𝙜𝙧𝙖𝙢 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙞𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙞𝙁𝙗 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙞𝙁𝙖𝙘𝙚𝘽𝙤𝙤𝙠 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙞𝙄𝙜 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙮𝙤𝙪𝙩𝙪𝙗𝙚 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝘼𝙣𝙩𝙞𝙔𝙤𝙪𝙩𝙪𝙗𝙚 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙧 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙙𝙚𝙩𝙚𝙘𝙩 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙪𝙩𝙤𝙙𝙚𝙩𝙚𝙘𝙩 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙣𝙨𝙛𝙬 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙢𝙤𝙙𝙤𝙘𝙖𝙡𝙞𝙚𝙣𝙩𝙚 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙧 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙢𝙤𝙙𝙤𝙖𝙙𝙢𝙞𝙣 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙪𝙙𝙞𝙤𝙨 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙘𝙝𝙖𝙩𝙗𝙤𝙩 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙪𝙩𝙤𝙡𝙚𝙫𝙚𝙡𝙪𝙥 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙪𝙩𝙤𝙣𝙞𝙫𝙚𝙡 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙠𝙞𝙘𝙠 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙖𝙙𝙙 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙞𝙣𝙫𝙞𝙩𝙖 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙥𝙧𝙤𝙢𝙤𝙩𝙚 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙙𝙚𝙢𝙤𝙩𝙚 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙞𝙣𝙛𝙤𝙜𝙧𝙪𝙥𝙤
┣➣${prefix}𝙜𝙧𝙤𝙪𝙥𝙞𝙣𝙛𝙤
┣➣${prefix}𝙖𝙙𝙢𝙞𝙣𝙨 _(𝙡𝙡𝙖𝙢𝙖 𝙖 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨)_
┣➣${prefix}𝙜𝙧𝙪𝙥𝙤 𝙘𝙡𝙤𝙨𝙚/𝙤𝙥𝙚𝙣 
┣➣${prefix}𝙬𝙖𝙧𝙣 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙪𝙣𝙬𝙖𝙧𝙣 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙦𝙪𝙞𝙩𝙖𝙧𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙨𝙚𝙩𝙥𝙥𝙣𝙖𝙢𝙚 _(𝙘𝙖𝙢𝙗𝙞𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤)_
┣➣${prefix}𝙨𝙚𝙩𝙙𝙚𝙨𝙘 _(𝙘𝙖𝙢𝙗𝙞𝙖 𝙡𝙖 𝙙𝙚𝙨𝙘 𝙙𝙚𝙡 𝙂𝙧𝙪𝙥𝙤)_
┣➣${prefix}𝙨𝙚𝙩𝙥𝙥𝙜𝙧𝙤𝙪𝙥 _(𝙘𝙖𝙢𝙗𝙞𝙖 𝙡𝙖 𝙛𝙤𝙩𝙤 𝙙𝙚𝙡 𝙂𝙧𝙪𝙥𝙤)_
┣➣${prefix}𝙖𝙣𝙪𝙡𝙖𝙧𝙡𝙞𝙣𝙠 
┣➣${prefix}𝙧𝙚𝙨𝙚𝙩𝙡𝙞𝙣𝙠 _(𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚 𝙚𝙡 𝙡𝙞𝙣𝙠 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤)_
┣➣${prefix}𝙝𝙞𝙙𝙚𝙩𝙖𝙜 _(𝙚𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙚𝙡 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚)_
┣➣${prefix}𝙩𝙖𝙜𝙖𝙡𝙡 
┣➣${prefix}𝙞𝙣𝙫𝙤𝙘𝙖𝙧 _(𝙚𝙩𝙞𝙦𝙪𝙚𝙩𝙖 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙚𝙡 𝙪𝙣𝙖 𝙡𝙞𝙨𝙩𝙖𝙨)_
┣➣${prefix}𝙡𝙞𝙨𝙩𝙤𝙣𝙡𝙞𝙣𝙚 _(𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙤𝙣𝙡𝙞𝙣𝙚)_
*━━━━━━━✦✗✦━━━━━━━━࣭۫*

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🔎⃐ＢＵＳＣＡＤＯＲＥＳ*️⃟ᬽ፝֟━*
┣➣${prefix}𝙜𝙤𝙤𝙜𝙡𝙚 _(𝙗𝙪𝙨𝙘𝙖𝙧 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙘𝙤𝙣 𝙜𝙤𝙤𝙜𝙡𝙚)_
┣➣${prefix}𝙘𝙝𝙖𝙩𝙜𝙥𝙩
┣➣${prefix}𝙞𝙖 _(𝙗𝙪𝙨𝙘𝙖𝙧 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 𝙘𝙤𝙣 𝙡𝙖 𝙄𝘼)_
┣➣${prefix}𝙗𝙖𝙧𝙙 _(𝙗𝙪𝙨𝙘𝙖𝙧 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣)_
┣➣${prefix}𝙞𝙢𝙖𝙜𝙚𝙣 _(𝙄𝙢𝙖𝙜𝙚𝙣 𝙚𝙣 𝙜𝙤𝙤𝙜𝙡𝙚)_
┣➣${prefix}𝙩𝙧𝙖𝙙𝙪𝙘𝙞𝙧 _(𝙏𝙧𝙖𝙙𝙪𝙘𝙞𝙧 𝙖𝙡𝙜𝙪𝙣 𝙩𝙚𝙭𝙩𝙤)_
┣➣${prefix}𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧 _(𝙞𝙢𝙖𝙜𝙚𝙣 𝙙𝙚𝙡 𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧)_
┣➣${prefix}𝙨𝙨 _(𝙡𝙞𝙣𝙠)_
┣➣${prefix}𝙙𝙖𝙡𝙡-𝙚
┣➣${prefix}𝙞𝙖2 _(𝘾𝙧𝙚𝙖𝙧 𝙞𝙢𝙖𝙜𝙚𝙣 𝙘𝙤𝙣 𝙡𝙖 (𝙄𝘼)_
┣➣${prefix}𝙝𝙤𝙧𝙖𝙧𝙞𝙤
*━━━━━━━✦✗✦━━━━━━━━࣭۫*

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👾ＪＵＥＧＯＳ*️⃟ᬽ፝֟━*
┣➣${prefix}𝙨𝙞𝙢𝙞 _(𝙝𝙖𝙗𝙡𝙖𝙧 𝙘𝙤𝙣 𝙚𝙡 𝙗𝙤𝙩)_
┣➣${prefix}𝙥𝙥𝙩 _(𝙥𝙞𝙚𝙙𝙧𝙖, 𝙥𝙖𝙥𝙚𝙡, 𝙤 𝙩𝙞𝙟𝙚𝙧𝙖)_
┣➣${prefix}𝙜𝙖𝙮 @𝙩𝙖𝙜
┣➣${prefix}𝙥𝙖𝙧𝙚𝙟𝙖 @𝙩𝙖𝙜
┣➣${prefix}𝙡𝙤𝙫𝙚 @𝙩𝙖𝙜
┣➣${prefix}𝙛𝙤𝙡𝙡𝙖𝙧 @𝙩𝙖𝙜
┣➣${prefix}𝙩𝙤𝙥𝙜𝙖𝙮𝙨
┣➣${prefix}𝙩𝙤𝙥𝙤𝙩𝙖𝙠𝙪𝙨
┣➣${prefix}𝙩𝙤𝙥
┣➣${prefix}𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖
┣➣${prefix}𝙫𝙚𝙧𝙙𝙖𝙙
┣➣${prefix}𝙧𝙚𝙩𝙤
┣➣${prefix}𝙙𝙤𝙭𝙚𝙖𝙧
┣➣${prefix}𝙢𝙖𝙩𝙝
┣➣${prefix}𝙢𝙖𝙩𝙚𝙢𝙖𝙩𝙞𝙘𝙖𝙨
┣➣${prefix}𝙩𝙩𝙩
┣➣${prefix}𝙩𝙞𝙘𝙩𝙖𝙘𝙩𝙤𝙚
┣➣${prefix}𝙩𝙩𝙘
┣➣${prefix}𝙙𝙚𝙡𝙩𝙩𝙩
┣➣${prefix}𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙡𝙞𝙙𝙖𝙙
┣➣${prefix}𝙧𝙖𝙘𝙞𝙨𝙩𝙖
┣➣${prefix}𝙨𝙡𝙤𝙩
┣➣${prefix}𝙙𝙖𝙙𝙤
┣➣${prefix}𝙥𝙞𝙧𝙤𝙥𝙤
┣➣${prefix}𝙨𝙝𝙞𝙥
┣➣${prefix}𝙛𝙤𝙧𝙢𝙖𝙧𝙩𝙧𝙞𝙤
┣➣${prefix}𝙛𝙤𝙧𝙢𝙖𝙥𝙖𝙧𝙚𝙟𝙖5
┣➣${prefix}𝙩𝙭𝙩 _(𝙩𝙚𝙭𝙩𝙤)_
┣➣${prefix}𝙛𝙖𝙠𝙚 _(𝙩𝙚𝙭𝙩𝙤 + 𝙩𝙖𝙜)_
*━━━━━━━✦✗✦━━━━━━━━࣭۫*

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*🎤 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎*️⃟ᬽ፝֟━*
┣➣ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┣➣${prefix}𝙗𝙖𝙨𝙨
┣➣${prefix}𝙗𝙡𝙤𝙬𝙣
┣➣${prefix}𝙙𝙚𝙚𝙥
┣➣${prefix}𝙚𝙖𝙧𝙧𝙖𝙥𝙚
┣➣${prefix}𝙛𝙖𝙨𝙩
┣➣${prefix}𝙛𝙖𝙩
┣➣${prefix}𝙣𝙞𝙜𝙝𝙩𝙘𝙤𝙧𝙚
┣➣${prefix}𝙧𝙚𝙫𝙚𝙧𝙨𝙚
┣➣${prefix}𝙧𝙤𝙗𝙤𝙩
┣➣${prefix}𝙨𝙡𝙤𝙬
┣➣${prefix}𝙨𝙢𝙤𝙤𝙩𝙝
┣➣${prefix}𝙨𝙦𝙪𝙞𝙧𝙧𝙚𝙡
*━━━━━━━✦✗✦━━━━━━━━࣭۫*

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🧧𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎*️⃟ᬽ፝֟━*
┣➣${prefix}𝙩𝙤𝙪𝙧𝙡
┣➣${prefix}𝙩𝙩𝙨
┣➣${prefix}𝙩𝙤𝙢𝙥3
┣➣${prefix}𝙩𝙤𝙞𝙢𝙜
┣➣${prefix}𝙩𝙤𝙖𝙪𝙙𝙞𝙤
┣➣${prefix}𝙩𝙤𝙖𝙣𝙞𝙢𝙚
┣➣${prefix}𝙝𝙙
*━━━━━━━✦✗✦━━━━━━━━࣭۫* 	

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🥵𝘾𝙊𝙈𝘼𝙉𝘿𝙊 +18*️⃟ᬽ፝֟━*
┣➣  *𝘼𝙘𝙩𝙞𝙫𝙖 𝙘𝙤𝙣 (𝙖𝙣𝙩𝙞𝙉𝙨𝙛𝙬 𝙤𝙣)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┣➣${prefix}𝙥𝙪𝙨𝙨𝙮
┣➣${prefix}𝙣𝙨𝙛𝙬𝙡𝙤𝙡𝙞
┣➣${prefix}𝙝𝙚𝙣𝙩𝙖𝙞
┣➣${prefix}𝙝𝙚𝙣𝙩𝙖𝙞2
┣➣${prefix}𝙥𝙖𝙘𝙠
┣➣${prefix}𝙥𝙖𝙘𝙠2
┣➣${prefix}𝙥𝙖𝙘𝙠3
┣➣${prefix}𝙫𝙞𝙙𝙚𝙤𝙭𝙭𝙭
┣➣${prefix}𝙫𝙞𝙙𝙚𝙤𝙭𝙭𝙭𝙡𝙚𝙨𝙗𝙞
┣➣${prefix}𝙥𝙤𝙧𝙣𝙤𝙡𝙚𝙨𝙗𝙞𝙖𝙣𝙖𝙫𝙞𝙙
┣➣${prefix}𝙫𝙞𝙙𝙚𝙤𝙡𝙚𝙨𝙗𝙞𝙭𝙭𝙭
┣➣${prefix}𝙥𝙤𝙧𝙣𝙤
┣➣${prefix}𝙡𝙚𝙬𝙙
┣➣${prefix}𝙛𝙚𝙚𝙙
┣➣${prefix}𝙜𝙖𝙨𝙢
┣➣${prefix}𝙖𝙣𝙖𝙡	    	
┣➣${prefix}𝙝𝙤𝙡𝙤	    	
┣➣${prefix}𝙩𝙞𝙩𝙨	    	
┣➣${prefix}𝙠𝙪𝙣𝙞
┣➣${prefix}𝙠𝙞𝙨𝙨
┣➣${prefix}𝙚𝙧𝙤𝙠
┣➣${prefix}𝙨𝙢𝙪𝙜
┣➣${prefix}𝙨𝙤𝙡𝙤𝙜
┣➣${prefix}𝙛𝙚𝙚𝙩𝙜
┣➣${prefix}𝙡𝙚𝙬𝙙𝙠    
┣➣${prefix}𝙛𝙚𝙢𝙙𝙤𝙢
┣➣${prefix}𝙘𝙪𝙙𝙙𝙡𝙚
┣➣${prefix}𝙚𝙧𝙤𝙮𝙪𝙧𝙞
┣➣${prefix}𝙘𝙪𝙢	    
┣➣${prefix}𝙗𝙡𝙤𝙬𝙟𝙤𝙗
┣➣${prefix}𝙝𝙤𝙡𝙤𝙚𝙧𝙤
┣➣${prefix}𝙚𝙧𝙤𝙠𝙚𝙢𝙤
┣➣${prefix}𝙛𝙤𝙭_𝙜𝙞𝙧𝙡
┣➣${prefix}𝙛𝙪𝙩𝙖𝙣𝙖𝙧𝙞
┣➣${prefix}𝙬𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧	   
┣➣ *𝙉𝙤𝙩𝙖: 𝙪𝙨𝙖𝙧𝙡𝙤 𝙗𝙖𝙟𝙖 𝙩𝙪 𝙧𝙚𝙨𝙥𝙤𝙣𝙨𝙖𝙗𝙞𝙡𝙞𝙙𝙖𝙙*
*━━━━━━━✦✗✦━━━━━━━━࣭۫* 	
	
┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⛩️ ⃐𝙍𝘼𝙉𝘿𝙊𝙒*️⃟ᬽ፝֟━*
┣➣${prefix}𝙢𝙚𝙢𝙚𝙨
┣➣${prefix}𝙝𝙤𝙧𝙣𝙮
┣➣${prefix}𝙨𝙞𝙢𝙥
┣➣${prefix}𝙡𝙤𝙡𝙞𝙘𝙚
┣➣${prefix}𝙘𝙤𝙢𝙚𝙣𝙩𝙖𝙧
┣➣${prefix}𝙘𝙤𝙢𝙢𝙚𝙣𝙩
┣➣${prefix}𝙡𝙤𝙡𝙞
┣➣${prefix}𝙡𝙤𝙡𝙞𝙫𝙞𝙙
┣➣${prefix}𝙣𝙚𝙠𝙤
┣➣${prefix}𝙬𝙖𝙞𝙛𝙪	
┣➣${prefix}𝙗𝙡𝙖𝙘𝙠𝙥𝙞𝙣𝙠
┣➣${prefix}𝙣𝙖𝙫𝙞𝙙𝙖𝙙
┣➣${prefix}𝙖𝙠𝙞𝙧𝙖
┣➣${prefix}𝙖𝙠𝙞𝙮𝙖𝙢𝙖
┣➣${prefix}𝙖𝙣𝙣𝙖
┣➣${prefix}𝙖𝙨𝙪𝙣𝙖
┣➣${prefix}𝙖𝙮𝙪𝙯𝙖𝙬𝙖
┣➣${prefix}𝙗𝙤𝙧𝙪𝙩𝙤
┣➣${prefix}𝙘𝙝𝙞𝙝𝙤
┣➣${prefix}𝙘𝙝𝙞𝙩𝙤𝙜𝙚
┣➣${prefix}𝙙𝙚𝙞𝙙𝙖𝙧𝙖
┣➣${prefix}𝙚𝙧𝙯𝙖
┣➣${prefix}𝙚𝙡𝙖𝙞𝙣𝙖
┣➣${prefix}𝙚𝙗𝙖
┣➣${prefix}𝙚𝙢𝙞𝙡𝙞𝙖
┣➣${prefix}𝙝𝙚𝙨𝙩𝙞𝙖
┣➣${prefix}𝙝𝙞𝙣𝙖𝙩𝙖
┣➣${prefix}𝙞𝙣𝙤𝙧𝙞
┣➣${prefix}𝙞𝙨𝙪𝙯𝙪
┣➣${prefix}𝙞𝙩𝙖𝙘𝙝𝙞
┣➣${prefix}𝙞𝙩𝙤𝙧𝙞
┣➣${prefix}𝙠𝙖𝙜𝙖
┣➣${prefix}𝙠𝙖𝙜𝙪𝙧𝙖
┣➣${prefix}𝙠𝙖𝙤𝙧𝙞':
┣➣${prefix}𝙠𝙚𝙣𝙚𝙠𝙞
┣➣${prefix}𝙠𝙤𝙩𝙤𝙧𝙞
┣➣${prefix}𝙠𝙪𝙧𝙪𝙢𝙞
┣➣${prefix}𝙢𝙖𝙙𝙖𝙧𝙖
┣➣${prefix}𝙢𝙞𝙠𝙖𝙨𝙖
┣➣${prefix}𝙢𝙞𝙠𝙪
┣➣${prefix}𝙢𝙞𝙣𝙖𝙩𝙤
┣➣${prefix}𝙣𝙖𝙧𝙪𝙩𝙤
┣➣${prefix}𝙣𝙚𝙯𝙪𝙠𝙤
┣➣${prefix}𝙨𝙖𝙜𝙞𝙧𝙞
┣➣${prefix}𝙨𝙖𝙨𝙪𝙠𝙚
┣➣${prefix}𝙨𝙖𝙠𝙪𝙧𝙖
┣➣${prefix}'𝙘𝙤𝙨𝙥𝙡𝙖𝙮
*━━━━━━━✦✗✦━━━━━━━━࣭۫*
             
*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐🪙 ＥＣＯＮＯＭＩＡ*️⃟ᬽ፝֟━*
┣➣${prefix}𝙢𝙞𝙣𝙖𝙧 _(𝙋𝙖𝙧𝙖 𝙢𝙞𝙣𝙖𝙧 𝙚𝙭𝙥)_
┣➣${prefix}𝙧𝙤𝙗𝙖𝙧
┣➣${prefix}𝙧𝙤𝙗 _(𝙍𝙤𝙗𝙖 𝙚𝙭𝙥 𝙖𝙡𝙜𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨)_
┣➣${prefix}𝙘𝙧𝙞𝙢𝙚
┣➣${prefix}𝙩𝙧𝙖𝙗𝙖𝙟𝙖𝙧
┣➣${prefix}𝙬𝙤𝙧𝙠 _(𝙏𝙧𝙖𝙗𝙖𝙟𝙖 𝙮 𝙜𝙖𝙣𝙖𝙨 𝙚𝙭𝙥)_
┣➣${prefix}𝙗𝙪𝙮 _(𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙢𝙖𝙨 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 (𝙡𝙞𝙢𝙞𝙩)_
┣➣${prefix}𝙗𝙖𝙡
┣➣${prefix}𝙗𝙖𝙡𝙖𝙘𝙚 _(𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚/𝙚𝙭𝙥 𝙩𝙚𝙣𝙚𝙨)_
┣➣${prefix}𝙘𝙡𝙖𝙞𝙢
┣➣ _(𝙍𝙚𝙘𝙤𝙜𝙚𝙧 𝙩𝙪 𝙧𝙚𝙘𝙤𝙢𝙥𝙚𝙣𝙨𝙖)_
┣➣  ${prefix}𝙡𝙗
┣➣${prefix}𝙡𝙚𝙖𝙙𝙚𝙧𝙗𝙤𝙖𝙧𝙙
┣➣${prefix}𝙘𝙤𝙛𝙧𝙚
┣➣${prefix}𝙥𝙚𝙧𝙛𝙞𝙡
┣➣${prefix}𝙣𝙞𝙫𝙚𝙡
┣➣${prefix}𝙡𝙚𝙫𝙚𝙡𝙪𝙥
┣➣${prefix}𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧𝙞𝙧
┣➣${prefix}𝙩𝙧𝙖𝙣𝙨𝙛𝙚𝙧
┣➣${prefix}𝙖𝙛𝙠 
*━━━━━━━✦✗✦━━━━━━━━࣭۫*

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👽ＳＴＩＣＫＥＲ*️⃟ᬽ፝֟━*
├❥ *(𝘾𝙧𝙚𝙖𝙧 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙙𝙚𝙨𝙙𝙚 𝙬𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙘𝙤𝙣 𝙎𝘼𝙈𝙐𝙍𝘼𝙄-𝘽𝙊𝙏)*
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┣➣${prefix}𝙨
┣➣${prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧 
┣➣${prefix}𝙬𝙢
┣➣${prefix}𝙖𝙩𝙩𝙥
┣➣${prefix}𝙦𝙘
┣➣${prefix}𝙚𝙢𝙤𝙟𝙞𝙢𝙞𝙭
*━━━━━━━✦✗✦━━━━━━━━࣭۫*

*┏─┓─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐👑ＯＷＮＥＲ*️⃟ᬽ፝֟━*
├❥ _(𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙭𝙘𝙡𝙪𝙨𝙞𝙫𝙤 𝙥𝙖𝙧𝙖 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤/𝙤𝙬𝙣𝙚𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩)_
├ *✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:
┣➣${prefix}𝙖𝙣𝙩𝙞𝙘𝙖𝙡𝙡 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙡𝙡𝙖𝙢𝙖𝙙𝙖 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙥𝙫 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙣𝙩𝙞𝙥𝙧𝙞𝙫𝙖𝙙𝙤 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖𝙪𝙩𝙤𝙧𝙚𝙖𝙙 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙢𝙤𝙙𝙤𝙟𝙖𝙙𝙞𝙗𝙤𝙩 _(𝙤𝙣/𝙤𝙛𝙛)_
┣➣${prefix}𝙖ñ𝙖𝙙𝙞𝙧𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙖𝙙𝙙𝙡𝙞𝙢𝙞𝙩 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙙𝙖𝙧𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙖ñ𝙖𝙙𝙞𝙧𝙭𝙥 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙖𝙙𝙙𝙭𝙥 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙗𝙖𝙣𝙪𝙨𝙚𝙧 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙪𝙣𝙗𝙖𝙣𝙪𝙨𝙚𝙧 _(@𝙩𝙖𝙜)_
┣➣${prefix}𝙖𝙪𝙩𝙤𝙖𝙙𝙢𝙞𝙣 
┣➣${prefix}𝙣𝙪𝙚𝙫𝙤𝙣𝙤𝙢𝙗𝙧𝙚
┣➣${prefix}𝙗𝙤𝙩𝙣𝙖𝙢𝙚 _(𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙚𝙡 𝙣𝙖𝙢𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩)_
┣➣${prefix}𝙣𝙪𝙚𝙫𝙖𝙛𝙤𝙩𝙤
┣➣${prefix}𝙨𝙚𝙥𝙥𝙗𝙤𝙩
┣➣${prefix}𝙛𝙤𝙩𝙤𝙗𝙤𝙩 _(𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙡𝙖 𝙛𝙤𝙩𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩)_
┣➣${prefix}𝙗𝙘 (𝘿𝙞𝙛𝙪𝙨𝙞𝙤𝙣 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙘𝙝𝙖𝙩)
┣➣${prefix}𝙗𝙘𝙜𝙘 (𝘿𝙞𝙛𝙪𝙨𝙞𝙤𝙣 𝙨𝙤𝙡𝙤 𝙖 𝙜𝙧𝙪𝙥𝙤𝙨)
┣➣${prefix}𝙨𝙚𝙩𝙥𝙥 (𝘾𝙖𝙢𝙗𝙞𝙖 𝙡𝙖 𝙛𝙤𝙩𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩) 
┣➣${prefix}𝙥𝙪𝙗𝙡𝙞𝙘 (𝙈𝙤𝙙𝙤 𝙥𝙪𝙗𝙡𝙞𝙘𝙤) 
┣➣${prefix}𝙥𝙧𝙞𝙫𝙖𝙙𝙤 (𝙈𝙤𝙙𝙤 𝙥𝙧𝙞𝙫𝙖𝙙𝙤) 
┣➣${prefix}𝙜𝙚𝙩𝙘𝙖𝙨𝙚
┣➣${prefix}𝙛𝙚𝙩𝙘𝙝
┣➣${prefix}𝙪𝙥𝙙𝙖𝙩𝙚
┣➣${prefix}𝙧𝙚𝙨𝙩𝙖𝙧𝙩 
┣➣${prefix}𝙧𝙚𝙞𝙣𝙞𝙘𝙞𝙖𝙧
┣➣$ 
┣➣ >
┣➣ => 
*━━━━━━━✦✗✦━━━━━━━━࣭۫*`
conn.sendButton(m.chat, menu, botname, imagen1, [['𝐈𝐍𝐅𝐎', `.status`]], null, [['𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃', `${pickRandom([nna, nn, md, yt, n2])}`]], m)
/*conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363297379773397@newsletter', 
serverMessageId: '', 
newsletterName: '𝐁𝐚𝐤𝐢𝐁𝐨𝐭-𝐌𝐃' },
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})*/
}

if (command == 'nuevo' || command == 'extreno') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text15(vs), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363297379773397@newsletter', serverMessageId: '', newsletterName: 'YUGI-BOT' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'reglas') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text16, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363297379773397@newsletter', serverMessageId: '', newsletterName: 'YUGI-BOT' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
