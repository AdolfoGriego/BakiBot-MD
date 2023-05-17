/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import{sticker as e}from"../lib/sticker.js";import r from"../lib/uploadFile.js";import t from"../lib/uploadImage.js";import{webp2png as a}from"../lib/webp2mp4.js";import i from"moment-timezone";let handler=async(o,{conn:l,args:m,text:n,command:s,groupMetadata:d})=>{let[p,u]=n.split`|`;if(!p)return o.reply(`Agregue el nombre del paquete y nombre del autor, ejemplo: 

${Prefijo+s} paquete|autor
`);if(!u)return o.reply(`Agregue el nombre del paquete y nombre del autor \xf3 viceversa, ejemplo: 

${Prefijo+s} paquete|autor
`);await l.getName(o.sender),i().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("DD/MM/YY HH:mm:ss");let g=await l.getName(o.sender),w=!1;try{let f=o.quoted?o.quoted:o,c=(f.msg||f).mimetype||f.mediaType||"";if(/webp|image|video/g.test(c)){if(/video/g.test(c)&&(f.msg||f).seconds>8)return o.reply(`*[ ! ] M\xe1xima duraci\xf3n de v\xeddeo son 7 segundos!*`);let y=await f.download?.();if(!y)return o.reply(`*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+s}*
_NOTA : duracion de video 1 a 10 segundos m\xe1ximo_ ✓`);o.reply(MultiNK.Proces(g));let b;try{w=await e(y,!1,p,u),reacMoji(o.chat,l,"⚙️",o)}catch(h){console.error(h)}finally{w||(/webp/g.test(c)?b=await a(y):/image/g.test(c)?b=await t(y):/video/g.test(c)&&(b=await r(y)),"string"!=typeof b&&(b=await t(y)),w=await e(!1,b,p,u))}}else if(m[0]){if(!isUrl(m[0]))return o.reply("[ ! ] Url inv\xe1lido, prueba con otro ;3");w=await e(!1,m[0],p,u)}}catch(v){console.error(v),w||(w=v)}finally{if(!w)return o.reply("[ ! ] Error");l.sendFile(o.chat,w,"sticker.webp","",o)}};handler.help=["wm [multimedia/url]"],handler.tags=["conversor","herramienta"],handler.command=/^(wm|stickerwm|swm|stickergifwm|sgifwm)$/i,handler.limit=!0;export default handler;let isUrl=e=>e.match(RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,"gi"));
