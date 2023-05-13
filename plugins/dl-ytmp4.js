let handler=async(e,{conn:t,command:a,text:r,args:l})=>{if(!r)return e.reply(`*¿ Que desea buscar en Youtube ?*\n\`\`\`📌Ejemplo de uso:\`\`\` 

${Prefijo+a} https://youtu.be/cNgyuHtBBW8`);if(!isUrl(l[0])&&!l[0].includes("youtu"))return e.reply("*[ ! ] Link inv\xe1lido*\n_Por favor, use un link de YouTube_\n");let i;await e.reply(MultiNK.Proces(await t.getName(e.sender)));let n=encodeURIComponent(r);try{let o=await fetchJson(`https://latam-api.vercel.app/api/ytmp4_2?apikey=${MyApiKey}&q=${n}`);t.sendMessage(e.chat,{video:{url:o.descarga},fileName:`${o.titulo}.mp4`,mimetype:"video/mp4",caption:`Titulo: ${o.titulo}
Tama\xf1o: ${o.peso}
Extencion: .mp4`},{quoted:e}).catch(t=>{e.reply(MultiNK.Error1())})}catch(p){e.reply(MultiNK.Error0())}};handler.help=["ytmp4 <link>"],handler.tags=["servicio"],handler.command=/^(ytmp4)$/i,handler.limit=!0;export default handler;
