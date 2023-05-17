import{sticker as e}from"../lib/sticker.js";import t from"../lib/uploadFile.js";import o from"../lib/uploadImage.js";import{webp2png as a}from"../lib/webp2mp4.js";import i from"moment-timezone";let handler=async(r,{conn:n,args:d,text:s,command:l,groupMetadata:m})=>{let p=await n.getName(r.sender),u=i().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("DD/MM/YY HH:mm:ss"),c=(p||"-").length>4?`🧰 ${p}
`:"",g=(m.subject||"-").length>9?`
⚙️ ${m.subject}
`:"",f=s.length>0?`

"${s}"`:`

⌚ ${u}`,_=!1;try{let w=r.quoted?r.quoted:r,h=(w.msg||w).mimetype||w.mediaType||"";if(/webp|image|video/g.test(h)){if(/video/g.test(h)&&(w.msg||w).seconds>11)return r.reply(`◆━━━━◆𝗜𝗡𝗙𝗢 - 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ◆━━━━◆\n\n✴️ Máxima duración de video es de 10 segundos`);let v=await w.download?.();if(!v)return r.reply(`◆━━━━◆𝗜𝗡𝗙𝗢 - 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ◆━━━━◆\n\n✴️ Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+l}*\n\n*✍🏻 NOTA:* duracion del video 1 a 10 segundos m\xe1ximo_ ✓`);r.reply(MultiNK.Proces(p));let y;try{_=await e(v,!1,"",`
${c}${g}
🤖 ${NombreDelBot}${f}`),reacMoji(r.chat,n,"⚙️",r)}catch(b){console.error(b)}finally{_||(/webp/g.test(h)?y=await a(v):/video/g.test(h)&&(y=await t(v)),y&&"string"==typeof y||(y=await o(v)),_=await e(!1,y,"",`
${c}${g}
🤖 ${NombreDelBot}${f}`))}}else if(d[0]){if(!isUrl(d[0]))return r.reply("◆━━━━◆𝗜𝗡𝗙𝗢 - 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ◆━━━━◆\n\n🔰 La url es inválida prueba con otro");_=await e(!1,d[0],"",`
${c}${g}
🤖 ${NombreDelBot}

⌚ ${u}










`)}}catch(x){console.error(x),_||(_=x)}finally{if(!_)return r.reply(`◆━━━━◆𝗜𝗡𝗙𝗢 - 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ◆━━━━◆\n\n✴️ Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+l}*\n\n*✍🏻 NOTA:* duracion del video 1 a 10 segundos m\xe1ximo`);n.sendFile(r.chat,_,"sticker.webp","",r)}};handler.help=["sticker [multimedia/url]"],handler.tags=["conversor"],handler.command=/^s(tic?ker)?(gif)?$/i;export default handler;let isUrl=e=>e.match(RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,"gi"));
