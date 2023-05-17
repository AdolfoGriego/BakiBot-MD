let handler=async(n,{conn:o,groupMetadata:a,usedPrefix:e})=>{let t=n.chat;if(o.vote=o.vote?o.vote:{},!(t in o.vote))return n.reply(`*[ ! ] Aun no hay una votaci\xf3n activa en este grupo*
_Para crear una nueva votacion use el comando_ ${Prefijo}votacion`);let[r,l,i]=o.vote[t],v=`\`\`\`[ VOTOS ACTUALES ]\`\`\`

📋 *Razon:* ${r} <=

📝
├❐ 🫂
├──❍ Votos a favor ✅
${l.map((n,o)=>`├❐ ${o+1}. @${n.split`@`[0]}`).join("\n")?l.map((n,o)=>`├❍ ${o+1}. @${n.split`@`[0]}`).join("\n"):"├─❐ Aun no hay :v"}
╰──❍ *💨 Total:* ${l.length}

📝
├❐ 👥
├─❍ Votos en contra ❎
${i.map((n,o)=>`├❐ ${o+1}. @${n.split`@`[0]}`).join("\n")?i.map((n,o)=>`├❍ ${o+1}. @${n.split`@`[0]}`).join("\n"):"├❍ Aun no hay :v"}
╰──❐ *💨 Total:* ${i.length}

Use el comando ${Prefijo}reiniciarvotos para reiniciar la votacion ✓`.trim();n.reply(v,null,{mentions:o.parseMention(v)})};handler.help=["vervotos"],handler.tags=["grupos"],handler.command=/^vervotos$/i,handler.group=!0;export default handler;
