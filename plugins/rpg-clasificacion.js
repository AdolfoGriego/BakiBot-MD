import e from"../lib/database.js";import{areJidsSameUser as i}from"@adiwajshing/baileys";let leaderboards=["level","exp","limit","nkoins","hierro","oro","diamante","esmeralda","basura","elixir","miMascot","madera","roca","cuerda","ordinario","singular","mitico","legendario","mascota"],handler=async(r,{conn:n,args:t,participants:a,command:o})=>{let m=Object.entries(e.data.users).map(([e,i])=>({...i,jid:e})),l=leaderboards.filter(e=>e&&m.filter(i=>i&&i[e]).length),d=(t[0]||"").toLowerCase(),s=e=>Math.ceil(m.filter(i=>i&&i[e]).length/25),u=`
\`\`\`📌 USE EL COMANDO DE MANERA CORRECTA\`\`\`

*📌 ejemplo de uso:*

${Prefijo}${o} nkoins 1

📍 Lista de tipos
${l.map(e=>`
${rpg.emoticon(e)}${e}
`.trim()).join("\n")}
`.trim();if(!l.includes(d))return r.reply(u);let p=isNumber(t[1])?Math.min(Math.max(parseInt(t[1]),0),s(d)):0,c=m.map(toNumber(d)).sort(sort(d)),f=c.map(enumGetKey),g=`
❐═══❮ 🥇 𝗧𝗢𝗣 - 𝗥𝗔𝗡𝗞𝗜𝗡𝗚 🥇❯═══❐

• *${rpg.emoticon(d)}${d} p\xe1gina de ranking ${p} de ${s(d)}* •
T\xfa: *${f.indexOf(r.sender)+1}* de *${f.length}*

${c.slice(25*p,25*p+25).map((e,r)=>`${r+1}. ${a.some(r=>i(e.jid,r.id))?`wa.me/${e.jid.split`@`[0]}`:""}(${n.getName(e.jid)}) *${e[d]} ${rpg.emoticon(d)}${d}*`).join`\n`}
`.trim();return r.reply(g,null,{mentions:[...f.slice(25*p,25*p+25)].filter(e=>!a.some(r=>i(e,r.id)))})};handler.help=["ranking"],handler.tags=["xp"],handler.command=/^(ranking)$/i;export default handler;function sort(e,i=!0){return e?(...r)=>r[1&i][e]-r[1&!i][e]:(...e)=>e[1&i]-e[1&!i]}function toNumber(e,i=0){return e?(r,n,t)=>({...t[n],[e]:void 0===r[e]?i:r[e]}):e=>void 0===e?i:e}function enumGetKey(e){return e.jid}function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}
