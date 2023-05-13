import e from"../lib/connection.js";import{plugins as t}from"../lib/plugins.js";import{cpus as a,totalmem as i,freemem as s,platform as o,type as n,arch as r,hostname as m}from"os";import{performance as l}from"perf_hooks";import{sizeFormatter as d}from"human-readable";import c from"performance-now";let{generateWAMessageFromContent:p}=(await import("@adiwajshing/baileys")).default,format=d({std:"JEDEC",decimalPlaces:2,keepTrailingZeroes:!1,render:(e,t)=>`${e} ${t}B`}),handler=async(d,{conn:u})=>{let h=Object.entries(e.store.chats).filter(([e,t])=>e&&t.isChats),g=h.filter(([e])=>e.endsWith("@g.us")),f=process.memoryUsage(),$=a().map(e=>(e.total=Object.keys(e.times).reduce((t,a)=>t+e.times[a],0),e)),y=$.reduce((e,t,a,{length:i})=>(e.total+=t.total,e.speed+=t.speed/i,e.times.user+=t.times.user,e.times.nice+=t.times.nice,e.times.sys+=t.times.sys,e.times.idle+=t.times.idle,e.times.irq+=t.times.irq,e),{speed:0,total:0,times:{user:0,nice:0,sys:0,idle:0,irq:0}}),w=d.reply("*Cargando información del bot*\n📌 Puedes ser bot usando .serbot");await w;let b=global.hit_cmd.length,j=l.now(),C=l.now()-j,k=c(),_=c()-k,v=m().includes("localhost")?"Servidor personal":m(),P=Math.floor(process.uptime())>43200?"Hits en las \xfaltimas horas":"Hits en los \xfaltimos minutos",A=0>=b?"":`
➪ *${P}* : _${b}_`,U=timeString(process.uptime()),x="‎".repeat(850);try{let M=await fetch("https://pastebin.com/raw/Bu8esjPA"),B=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");var E,T=(await M.json()).nk_media||B}catch(q){var T=await u.profilePictureUrl(u.user.jid,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png")}let H=`
╭──────────────────────
*➣👨‍💻Creador Oficial* : ${Propietario}
*➣⏳Tiempo de ejecucion* : ${U}.
*➣🎭Apodo en Whatsapp* : ${u.user.name}.
*➣🌍Grupos con mayor actividad* : ${g.length}
*➣✨Grupos nuevos* : ${g.length}
*➣㊙️Grupos abandonados* : ${g.length-g.length}
*➣✴️Chats personales* : ${h.length-g.length}
*➣👀Total de chats* : ${h.length} ${A}
*➣👁️‍🗨️️Version del bot* : ${BotVersion}
*➣🤓Github* : https://github.com/AdolfoGriego/BakiBot-MD
*➣💻Total de plugins* : ${Object.keys(t).length}
*➣⚡Velocidad de procesamiento* : ${C} s...
*➣🚀Velocidad de conexion* : ${_.toFixed(4)}ms...
*➣🧳RAM:* ${format(i()-s())} Restantes De ${format(i())}
*➣🍥Plataforma* : ${o()}
*➣📱Base OS* : ${n()}
*➣💻Arquitectura* : ${r()}
*➣🎩Host* : ${v}
╰───────────────────────
➫ _Consum\xf3 de memoria :_
${"```"+Object.keys(f).map((e,t,a)=>`${e.padEnd(Math.max(...a.map(e=>e.length))," ")}: ${format(f[e])}`).join("\n")+"```"}
➫ ${$[0]?`_Uso total de CPU_
${$[0].model.trim()} (${y.speed} MHZ)
${Object.keys(y.times).map(e=>`- *${(e+"*").padEnd(6)}: ${(100*y.times[e]/y.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usado (${$.length} Core CPU)_
${$.map((e,t)=>`${t+1}. ${e.model.trim()} (${e.speed} MHZ)
${Object.keys(e.times).map(t=>`- *${(t+"*").padEnd(6)}: ${(100*e.times[t]/e.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}`:""}`.trim();try{let I=p(d.chat,{orderMessage:{orderId:"5352482274766633",thumbnail:await getBuffer(T),itemCount:-369,status:1,surface:1,message:H,orderTitle:NombreDelBot+` 🔥`,sellerJid:"51957041866@s.whatsapp.net",token:"1655878716",priceAmount:"666000",totalAmount1000:"9999999999",totalCurrencyCode:"PEN",contextInfo:null}},{quoted:d});await u.relayMessage(d.chat,I.message,{messageId:I.key.id}),reacMoji(d.chat,u,"🧬",d)}catch(N){d.reply(H)}};handler.help=["informacion"],handler.tags=["casual"],handler.command=/^(informacion|infobot|ping|speed|alive)$/i;export default handler;
