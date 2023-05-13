import t from"cheerio";import e from"axios";let handler=async(t,{conn:e,text:r})=>{if(!r)return t.reply("Y el texto?");let n=await e.getName(t.sender);encodeURIComponent(r);let a=t.reply(MultiNK.Proces(n));await a;try{let l=await fuentes(r),o=`*Aqui tienes estilos de texto para:* ${r}

`;for(let i of l)o+=`✍️ *${i.name}* : ${i.result}

`;t.reply(o)}catch(d){t.reply(MultiNK.Error0())}};handler.help=["txtestilo"],handler.tags=["conversor"],handler.command=/^(txtestilo|fuentes)$/i;export default handler;function fuentes(r){return new Promise((n,a)=>{e.get("http://qaz.wtf/u/convert.cgi?text="+r).then(({data:e})=>{let r=t.load(e),a=[];r("table > tbody > tr").each(function(t,e){a.push({name:r(e).find("td:nth-child(1) > span").text(),result:r(e).find("td:nth-child(2)").text().trim()})}),n(a)}).catch(t=>a(t))})}
