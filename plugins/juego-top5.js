let handler=async(n,{conn:e,participants:r,text:l})=>{if(!l)return n.reply("*[ ! ] Que top desea generar?*");if(l.length<3)return n.reply("*[ ! ] El texto es muy corto*");let t=r[Math.floor(Math.random()*r.length)].id.split("@")[0],o=r[Math.floor(Math.random()*r.length)].id.split("@")[0],a=r[Math.floor(Math.random()*r.length)].id.split("@")[0],d,i=`*[ TOP 5 ${l} ]*
Generador : ${await e.getName(n.sender)}

1.- @${t} 

2.- @${o} 

3.- @${a} 

4.- @${r[Math.floor(Math.random()*r.length)].id.split("@")[0]} 

5.- ︎@${r[Math.floor(Math.random()*r.length)].id.split("@")[0]} 

*Generado exitosamente 🗽*
`;n.reply(i,n.chat,{mentions:e.parseMention(i)})};handler.help=["top5"],handler.tags=["games"],handler.command=/^(top5)$/i,handler.group=!0,handler.limit=!0;export default handler;
