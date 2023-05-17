import u from"../lib/database.js";let handler=async(D,{conn:e})=>{let n="\uD83C\uDF47",d="\uD83C\uDF4E",s="\uD83C\uDF53",a="\uD83D\uDD14",C="\uD83C\uDF51",r="\uD83D\uDCB0",l="\uD83E\uDD5D",F="☘️",t="\uD83C\uDF4C",i="\uD83C\uDF4B",c=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],o=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],$=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],m=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],_=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],g=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],h=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],B=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],E=[`${n}`,`${d}`,`${s}`,`${a}`,`${C}`,`${r}`,`${l}`,`${F}`,`${t}`,`${i}`],p=pickRandom(c),k=pickRandom(o),x=pickRandom($),b=pickRandom(m),f=pickRandom(_),q=pickRandom(g),J=pickRandom(h),M=pickRandom(B),j=pickRandom(E),y=`┃  | ${p} : ${k} : ${x}`,T=`┃  | ${b} : ${f} : ${q}`,v=`┃  | ${J} : ${M} : ${j}`;T.includes("\uD83C\uDF47 : \uD83C\uDF47 : \uD83C\uDF47")||T.includes("\uD83C\uDF4E : \uD83C\uDF4E : \uD83C\uDF4E")||T.includes("\uD83C\uDF53 : \uD83C\uDF53 : \uD83C\uDF53")||T.includes("\uD83D\uDD14 : \uD83D\uDD14 : \uD83D\uDD14")||T.includes("\uD83C\uDF51 : \uD83C\uDF51 : \uD83C\uDF51")||T.includes("\uD83D\uDCB0 : \uD83D\uDCB0 : \uD83D\uDCB0")||T.includes("\uD83E\uDD5D : \uD83E\uDD5D : \uD83E\uDD5D")||T.includes("☘️ : ☘️ : ☘️")||T.includes("\uD83C\uDF4C : \uD83C\uDF4C : \uD83C\uDF4C")||T.includes("\uD83C\uDF4B : \uD83C\uDF4B : \uD83C\uDF4B")?(e.sendMessage(D.chat,{text:`*Jugador : @${D.sender.replace(/@.+/,"")}*
*[ Felicidades, ganaste!!! ]* 🥳🎉

*🎰=====🎉======🎰*
*┃ ┌────────┐ ┃*
*${y}*
*┃ ├────────┤ ┃*
*${T} <==*
*┃ ├────────┤ ┃*
*${v}*
*┃ └────────┘ ┃*
*🎰=====🎉======🎰*

*Tu recompensa:* 
+50000 de dinero`,mentions:[D.sender]},{quoted:D}),u.data.users[D.sender].nkoins+=5e4):(u.data.users[D.sender].nkoins<11||(u.data.users[D.sender].nkoins-=10),e.sendMessage(D.chat,{text:`Jugador : @${D.sender.replace(/@.+/,"")}

🎰=====🪀======🎰
┃ ┌────────┐ ┃
${y}
┃ ├────────┤ ┃
${T}
┃ ├────────┤ ┃
${v}
┃ └────────┘ ┃
🎰=====🪀======🎰`,mentions:[D.sender]},{quoted:D}))};handler.help=["tragamoneda"],handler.tags=["games"],handler.command=/^(tragamoneda)$/i,handler.group=!0,handler.limit=!0;export default handler;
