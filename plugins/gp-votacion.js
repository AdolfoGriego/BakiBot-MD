let handler=async(a,{conn:o,text:t,isAdmin:e,isOwner:n,command:r,groupMetadata:i})=>{if(a.isGroup&&!(e||n))return dfail("admin",a,o);o.vote=o.vote?o.vote:{};let v=await o.getName(a.sender),l=a.chat;if(l in o.vote)return a.reply(`*[ ! ] Aun hay una votacion activa en el grupo*
_Use el comando_ : ${Prefijo}reiniciarvotos _para crear nueva votacion_`);if(!t)return a.reply(`*Ingrese un motivo para la votacion, ejemplo:*

${Prefijo+r} el admin es god?
`);if(t.length<7)return a.reply(`El motivo para la votaci\xf3n es muy corta!`);let c=`⚡ ${"@"+a.sender.split("@")[0]} *Comenz\xf3 una nueva votacion en el grupo:* ${i.subject}

_Como participar en la votaci\xf3n :_${"‎".repeat(850)}

╭❍   ${Prefijo}sivotar
╰──❐  Para dar un voto positivo ✔️

╭❍   ${Prefijo}novotar 
╰──❐  Para dar un voto negativo ❌

╭─❍   ${Prefijo}vervotos 
╰──❐  Para verificar los votos 👀

╭─❍   ${Prefijo}reiniciarvotos 
╰──❐  Para eliminar una votacion activa ♻️`;await a.reply(c,null,{mentions:o.parseMention(c)}),o.vote[l]=[t,[],[]];let s=`
\`\`\`[ VOTACI\xd3N ]\`\`\`

📋 *Razon:* ${o.vote[a.chat][0]}
👤 *Encuestador:* ${v}

📝
│🫂
├❐ Votos a favor ✅
│
╰───❍ Total: ${o.vote[a.chat][1].length}

📝
│👥
├─❍ Votos en contra ❎
│
╰───❍ Total: ${o.vote[a.chat][2].length}`;o.sendButton(a.chat,s,NombreDelBot+` 🔥`,null,[["Si Votar ✔️",`${Prefijo}sivotar`],["No Votar ❌",`${Prefijo}novotar`]],a,{mentions:o.parseMention(s)})};handler.help=["votacion [razon]"],handler.tags=["admins","grupos"],handler.command=/^(votacion|votación)$/i,handler.group=!0;export default handler;
