let handler=async(e,{conn:a,text:u,args:t})=>{if(!t[0])return e.reply("Que desea buscar en Google?");let i=await a.getName(e.sender),l=encodeURIComponent(u),r=e.reply(MultiNK.Bsqd(i));await r;try{let d=await fetchJson(`https://latam-api.vercel.app/api/google?apikey=${MyApiKey}&q=${l}`);if(!d.busqueda.titulo)return e.reply("[ ! ] Sin resultados");a.sendMessage(e.chat,{image:{url:"https://drive.google.com/uc?export=download&id=1EbjOXR5_6G4oLxyEiRQJEw3uDcOFvG2S"},caption:`                         ❴ GOOGLE - CHAN ❵

*✳️ Resultados para:* ${u}
${"‎".repeat(850)}
*Ⓜ️ Titulo:* ${d.busqueda.titulo}
*📇 Descripcion:* ${d.busqueda.descripcion}
*🌐 Url:* ${d.busqueda.link}
*🖼️ Imagen:* ${d.busqueda.imagen}

*🍒｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒*

*💠 ID:* ${d.busqueda.id}
*🍂 Link:* ${d.busqueda.link}
*🌊 Titulo:* ${d.busqueda.titulo}
*👤️ Autor:* ${d.busqueda.autor}
*⏲️ Duracion:* ${d.busqueda.duracion}`},{quoted:e})}catch(s){e.reply(MultiNK.Error0())}};handler.help=["google"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(google)$/i,handler.limit=!0;export default handler;
