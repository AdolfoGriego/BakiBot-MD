import*as e from"fs";let handler=async(a,{conn:n,participants:t,text:i})=>{if(!i)return a.reply("*[ ! ] Que top desea generar?*");if(i.length<5)return a.reply("*[ ! ] El texto es muy corto*");let l=t[Math.floor(Math.random()*t.length)].id.split("@")[0],o=t[Math.floor(Math.random()*t.length)].id.split("@")[0],r=t[Math.floor(Math.random()*t.length)].id.split("@")[0],d=t[Math.floor(Math.random()*t.length)].id.split("@")[0],p=t[Math.floor(Math.random()*t.length)].id.split("@")[0],m=t[Math.floor(Math.random()*t.length)].id.split("@")[0],s=t[Math.floor(Math.random()*t.length)].id.split("@")[0],g=t[Math.floor(Math.random()*t.length)].id.split("@")[0],h,$=`*TOP 10 ${i}*
_Generador_ : ${await n.getName(a.sender)}
${"‎".repeat(850)}
╭╼┥${i}┝╾─╮

_1.\xba @${l}_ 

_2.\xba @${o}_ 

_3.\xba @${r}_ 

_4.\xba @${d}_ 

_5.\xba @${p}_ 

_6.\xba @${m}_ 

_7.\xba @${s}_ 

_8.\xba @${g}_ 

_9.\xba @${t[Math.floor(Math.random()*t.length)].id.split("@")[0]}_ 

_10.\xba @${t[Math.floor(Math.random()*t.length)].id.split("@")[0]}_

╰──┥${NombreDelBot}┝──╯`;await a.reply($,a.chat,{mentions:n.parseMention($)});let u=e.readFileSync(`./multimedia/sonidos/audishit/audishit${pickRandom(["1","2","3","4","5","6"])}.m4a`),f=await fetchJson(`https://latam-api.vercel.app/pi/audi_top?apikey=${MyApiKey}`);if(!f.audio)return n.sendMessage(a.chat,{audio:u,fileName:"Top10.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:{key:{participant:"0@s.whatsapp.net"},message:{locationMessage:{name:`TOP 10 ${i}`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")}}}});n.sendMessage(a.chat,{audio:{url:f.audio},fileName:"Top10.mp3",mimetype:"audio/mpeg",ptt:!0},{quoted:{key:{participant:"0@s.whatsapp.net"},message:{locationMessage:{name:`TOP 10 ${i}`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/logo.jpg")}}}})};handler.help=["top10"],handler.tags=["games"],handler.command=/^(top10)$/i,handler.group=!0,handler.limit=!0;export default handler;
