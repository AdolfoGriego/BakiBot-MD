import e from"../lib/database.js";let items={comprar:{limit:{exp:999},elixir:{nkoins:1250},basura:{nkoins:4}},vender:{elixir:{nkoins:125},basura:{nkoins:2}}},handler=async(r,{command:o,args:n})=>{let i=e.data.users[r.sender],a=Object.fromEntries(Object.entries(items[o.toLowerCase()]).filter(([e])=>e&&e in i)),t=`
❐══❮ 🪙 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 - 𝗩𝗘𝗡𝗗𝗘𝗥 🪙 ❯══❐

Usar formato *${Prefijo}${o} [art\xedculo] [cantidad]*
\`\`\`📌 Ejemplo de uso:\`\`\` 

${Prefijo}${o} elixir 10
    
*🔱 Lista de art\xedculos:*
${Object.keys(a).map(e=>{let r=Object.keys(a[e]).find(e=>e in i);return`*♦️ ${global.rpg.emoticon(e)}${e}* ${"comprar"==o?"Costo":"Valor"} ${a[e][r]} ${global.rpg.emoticon(r)}${r}`.trim()}).join("\n")}
`.trim(),s=(n[0]||"").toLowerCase(),m=1*Math.floor(isNumber(n[1])?Math.min(Math.max(parseInt(n[1]),1),Number.MAX_SAFE_INTEGER):1);if(!a[s])return r.reply(t);if("comprar"==o.toLowerCase()){let l=Object.keys(a[s]).find(e=>e in i);return i[l]<a[s][l]*m?r.reply(`No tienes suficiente ${global.rpg.emoticon(l)}${l} para comprar *${m}* ${global.rpg.emoticon(s)}${s}. Necesitas *${a[s][l]*m-i[l]}* ${l} para poder comprar`):(i[l]-=a[s][l]*m,i[s]+=m,r.reply(`T\xfa compraste *${m}* ${global.rpg.emoticon(s)}${s} ✅`))}return i[s]<m?r.reply(`No tienes suficiente *${global.rpg.emoticon(s)}${s}* para vender, tu solo tienes ${i[s]} art\xedculos`):(i[s]-=m,i.nkoins+=a[s].nkoins*m,r.reply(`Vendiste *${m}* ${global.rpg.emoticon(s)}${s} ✅`))};handler.help=["comprar","vender"].map(e=>e+" [art\xedculo] [cantidad]"),handler.tags=["games"],handler.command=/^(comprar|vender)$/i,handler.disabled=!1;export default handler;function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}
