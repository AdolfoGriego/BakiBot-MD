let handler=async(t,{conn:e,args:i})=>{if(!i[0]||!isUrl(i[0])&&!i[0].includes("youtube.com"))return;await e.getName(t.sender);let r=[{title:"⏺️ - ⏮️ ⏸️ ⏭️ - \uD83D\uDD00",rows:[{title:"[ 🎶 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗔𝘂𝗱𝗶𝗼 🎶 ]",description:"𝗢𝗽𝗰𝗶𝗼𝗻 𝗡°: 𝟭",rowId:`${Prefijo}ytmp3 ${i[0]}`},{title:"[ 🎶 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗔𝘂𝗱𝗶𝗼 ]",description:"𝗢𝗽𝗰𝗶𝗼𝗻 𝗡°: 𝟮",rowId:`${Prefijo}yta ${i[0]}`},{title:"[ 🎶 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗔𝘂𝗱𝗶𝗼 🎶 ]",description:"𝗢𝗽𝗰𝗶𝗼𝗻 𝗡°: 𝟯",rowId:`${Prefijo}ytabochi ${i[0]}`}]},{title:"\uD83C\uDFA6 - ⏮️ ⏸️ ⏭️ - \uD83D\uDD00",rows:[{title:"[ 📽️ 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗩𝗶𝗱𝗲𝗼 📽️ ]",description:"𝗢𝗽𝗰𝗶𝗼𝗻 𝗡°: 𝟭",rowId:`${Prefijo}ytmp4 ${i[0]}`},{title:"[ 📽️ 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗩𝗶𝗱𝗲𝗼 📽️ ]",description:"𝗢𝗽𝗰𝗶𝗼𝗻 𝗡°: 𝟮",rowId:`${Prefijo}ytv ${i[0]}`},{title:"[ 📽️ 𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗩𝗶𝗱𝗲𝗼 📽️ ]",description:"𝗢𝗽𝗰𝗶𝗼𝗻 𝗡°: 𝟯",rowId:`${Prefijo}ytvbochi ${i[0]}`}]}];try{await e.sendMessage(t.chat,{text:`❖ ── ✦ ──『✙』── ✦ ── ❖`,footer:"\n"+NombreDelBot,title:`❖ ── ✦ ──『✙』── ✦ ── ❖
${i[0]}`,buttonText:" Porfavor seleccióne solo una opción ",sections:r},{quoted:t})}catch(o){t.reply(MultiNK.Error0())}};

//handler.help = ['listytdl <link>']
handler.tags = ['servicio']
handler.command = /^(listytdl)$/i

export default handler
