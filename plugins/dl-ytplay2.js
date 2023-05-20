let handler=async(e,{conn:a,command:t,text:r})=>{if(!r)return e.reply(`*¿ Que desea buscar en Youtube ?*\n\`\`\`📌Ejemplo de uso:\`\`\` 

${Prefijo+t} ideas en 5 minutos`);let l;await e.reply(MultiNK.Bsqd(await a.getName(e.sender)));let i=encodeURIComponent(r);try{let n=await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${i}`),s=pickRandom([0,1,2]),d=n.resultados[s];if(d.duracion_s>=1800)return e.reply("[ ! ] Sin resultados, vuelva a intentarlo...");let u;await a.sendMessage(e.chat,{image:{url:d.imagen},caption:`
*╭════❮ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 - 𝗣𝗟𝗔𝗬𝟮 ❯════❍*
*❐ ✍️ Titulo:* ${d.titulo}
*❐ ⚡ Autor:* ${d.autor}
*❐ ⏰ Duracion:* ${d.duracion}
*❐ 👀 Vistas:* ${d.vistas}
*❐ 📆 Fecha de subida:* ${d.f_carga}
*❐ 📺 Canal:* ${d.canal}
*❐ 📃 Descripcion:* ${d.descripcion||"-"}
*❐ 🧬 ID:* ${d.id}
*╰═══════════════════════❍*`.trim(),footer:NombreDelBot+` 🔥`,buttons:[{buttonId:`${Prefijo}listytdl ${d.url}`,buttonText:{displayText:"[ \uD83D\uDCE5 DESCARGAR \uD83D\uDCE5 ]"},type:1}],headerType:4},{quoted:e})}catch(o){e.reply(MultiNK.Error0())}};handler.help=["play2 <texto>"],handler.tags=["busqueda"],handler.command=/^(play2)$/i,handler.limit=!0;export default handler;