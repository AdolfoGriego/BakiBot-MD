let handler=async(a,{conn:e,text:n,command:t})=>{if(!n)return a.reply(`*¿ Que desea buscar en Youtube ?*\n\`\`\`📌Ejemplo de uso:\`\`\` 

${Prefijo+t} cuanto es 1 + 1 :v`);let r;await a.reply(MultiNK.Bsqd(await e.getName(a.sender)));let l=encodeURIComponent(n);try{let s=await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${l}`),i="*[ > ] Resultados en Youtube para:* _"+n+"_\n\n";for(let u of s.resultados)i+=`🔖 Titulo: ${u.titulo}
🧬 ID: ${u.id}
⛓️ URL: ${u.url}
🗜️ Tipo: ${u.tipo}
🖼️ Miniatura: ${u.imagen}
⌚ Duracion: ${u.duracion}
📜 Descripci\xf3n: ${u.descripcion}
📆 Fecha de subida: ${u.f_carga}
👀 Vistas: ${u.vistas}
||
⚡Autor: ${u.autor}
📺 Canal: ${u.canal}

\`\`\` ——————————\`\`\` 

`;a.reply(i)}catch(o){a.reply(MultiNK.Error0())}};handler.help=["ytbuscar <texto>"],handler.tags=["busqueda"],handler.command=/^(ytbuscar|ytsearch|yts)$/i;export default handler;
