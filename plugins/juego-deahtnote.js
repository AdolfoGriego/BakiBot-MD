import*as e from"fs";let handler=async(a,{conn:n,text:t,participants:r,command:i})=>{if(!t)return a.reply(`*🍒 Agregue una razon para tu ejecucion*

*📌 Ejemplo:*

${Prefijo+i} Soy Gay quiero que me ejecuten 😔
`);if(t.length<9)return a.reply("*[ ! ] La razon es muy corta*");let s=await n.profilePictureUrl(a.sender,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");var p=[];r.map(async e=>{p.push(e.id.replace("c.us","s.whatsapp.net"))});let o=1e4,m=p[Math.floor(Math.random()*p.length)];if(m.startsWith(n.user.id.split(":")[0]))return a.reply("Hoy no muere nadie :D");n.sendMessage(a.chat,{text:`*[ Death Note ]* 📓

*🍁 Seleccinado:* @${m.split("@")[0]}
*🗽 Raz\xf3n de su ejecucion:* 
${t}

_✳️ Tienes ${o%6e4/1e3} segundos para decir sus \xfaltimas palabras_
`,mentions:[m]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51957041866-1616169743@g.us",inviteCode:"m",groupName:"P",caption:`⚰️@${m.split("@")[0]} 💀`,jpegThumbnail:await miniThumb(await getBuffer(s))}}}}),setTimeout(()=>{setTimeout(()=>{n.groupParticipantsUpdate(a.chat,[m],"remove").catch(e=>{a.reply(MultiNK.Error1())})},1e3),n.sendMessage(a.chat,{text:"Press [F]",mentions:[m]},{ephemeralExpiration:86400,quoted:{key:{participant:"0@s.whatsapp.net",remoteJid:"0@s.whatsapp.net"},message:{groupInviteMessage:{groupJid:"51957041866-1616169743@g.us",inviteCode:"m",groupName:"P",caption:`Se come una manzana* 🍎`,jpegThumbnail:e.readFileSync("./multimedia/imagenes/press-f.jpg")}}}})},o)};handler.help=["deathnote"],handler.tags=["games"],handler.command=/^(deathnote)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;
