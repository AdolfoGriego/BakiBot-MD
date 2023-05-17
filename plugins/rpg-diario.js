import e from"../lib/database.js";let rewards={exp:9999,nkoins:4999,elixir:5},cooldown=864e5,handler=async a=>{let r=e.data.users[a.sender];if(new Date-r.lastclaim<864e5)return a.reply(`\xa1Ya has reclamado tu recompensa diaria!, vuelva despu\xe9s de *🕔 ${clockString(r.lastclaim+864e5-new Date)}.*`);let l="";for(let d of Object.keys(rewards))d in r&&(r[d]+=rewards[d],l+=`
❐══❮ 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔 𝗗𝗜𝗔𝗥𝗜𝗔 ❯══❐

╔─━━━━━━░★░━━━━━━─╗
│ *+${rewards[d]}* ${global.rpg.emoticon(d)}${d}
╚─━━━━━━░★░━━━━━━─╝
`);a.reply(l),r.lastclaim=new Date*1};handler.help=["diario"],handler.tags=["games"],handler.command=/^(diario)$/i,handler.cooldown=864e5;export default handler;
