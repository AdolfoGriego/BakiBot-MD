/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler=async(a,{conn:e,text:i,args:t})=>{if(!t[0])return a.reply(`Cual es su b\xfasqueda en Wikipedia?`);let r=await e.getName(a.sender),d=encodeURIComponent(i),l=a.reply(MultiNK.Bsqd(r));await l;try{let n=await fetchJson(`https://latam-api.vercel.app/api/wikipedia?apikey=${MyApiKey}&q=${d}`);if(!n.datos.wikinfo)return a.reply("[ ! ] Sin resultados");e.sendMessage(a.chat,{image:{url:n.datos.miniatura},caption:`|| *WIKIPEDIA* ||
_~> Resultados para : ${i}_
${"‎".repeat(850)}
${n.datos.wikinfo}`},{quoted:a})}catch(p){a.reply(MultiNK.Error0())}};handler.help=["wikipedia"].map(a=>a+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(wikipedia)$/i,handler.limit=!0;export default handler;
