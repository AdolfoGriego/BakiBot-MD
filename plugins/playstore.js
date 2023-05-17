let handler=async(a,{conn:e,text:i,args:r})=>{if(!r[0])return a.reply("Que desea buscar en playstore?");let t=await e.getName(a.sender),l=encodeURIComponent(i),n=a.reply(MultiNK.Bsqd(t));await n;try{let o=await fetchJson(`https://latam-api.vercel.app/api/playstore?apikey=${MyApiKey}&q=${l}`);if(!o.titulo)return a.reply("[ ! ] Sin resultados");let s=await traducIr(encodeURI(o.descripcion));e.sendMessage(a.chat,{image:{url:o.imagen?o.imagen:"https://github.com/NeKosmic/NK-BOT/raw/main/multimedia/imagenes/GplayHD.jpg"},caption:`🔍 Resultado: ${o.titulo}
🧬 Identificador: ${o.id}
⛓️ Link: ${o.link}
🖼️ Imagen: ${o.imagen}
✍️ Desarrollador: ${o.desarrollador}
📜 Descripcion: ${s||o.descripcion}
💲 Moneda: ${o.moneda}
🎭 Gratis: ${o.gratis}
💸 Precio: ${o.precio}
📈 Puntuacion: ${o.puntuacion}`},{quoted:a})}catch(d){a.reply(MultiNK.Error0())}};handler.help=["playstore"].map(a=>a+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(playstore)$/i,handler.limit=!0;export default handler;
