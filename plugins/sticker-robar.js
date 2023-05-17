import{addExif as e}from"../lib/sticker.js";let handler=async(r,{conn:t,text:a,command:n})=>{if(!r.quoted)return r.reply("Responda un sticker!");let l=[`┈╭━━╮┈┈╭━━╮┈┈┈┈
┈┃◥◥┃┈┈┃▍▍┃┈┈┈┈
┗┫┊▇┣┛┗┫▃┊┣┛┈┈┈
┈╰┳┳╯┈┈╰┳┳╯┈┈┈┈
▔▔┗┗▔▔▔▔┛┛▔▔▔▔▔▔`],i=!1;try{let[o,d]=a.split`|`,s=r.quoted.mimetype||"";if(!/webp/.test(s))return r.reply(`Envie \xf3 Responda un sticker con el comando ${Prefijo+n}`);let p=await r.quoted.download();if(!p)return r.reply("Responda un sticker!");i=await e(p,o||"",d||(o?"":`
- [ ${NombreDelBot} ] -


${pickRandom(l)}`))}catch(c){console.error(c),Buffer.isBuffer(c)&&(i=c)}finally{if(i)t.sendFile(r.chat,i,"wm.webp","",r,!1,{asSticker:!0});else throw"[!] La conversi\xf3n fall\xf3"}};handler.help=["robar <paquete>|<autor>"],handler.tags=["herramienta"],handler.command=/^(robar)$/i,handler.limit=!0;export default handler;
