let handler=async(e,{conn:a,groupMetadata:n,text:r,participants:d,isAdmin:t,isOwner:l})=>{let o=d.map(e=>e.id).filter(e=>e!==a.user.jid);await a.sendMessage(e.chat,{text:`
*❍──────❮ 𝗧𝗔𝗚𝗔𝗟𝗟 - 𝗚𝗥𝗨𝗣𝗢 ❯──────❍*

*📢 Invocando a los integrantes del grupo:* ${n.subject}
*👤 Invocador* : @${e.sender.replace(/@.+/,"")}
*💬 Mensaje* : ${r||"No hay :v"}
${"‎".repeat(850)}
*╭──────────────────❍*
`+o.map(e=>"*❐* @"+e.replace(/@.+/,"")).join`\n`+"\n*╰───────────────────❍*\n",mentions:o},{quoted:e}),reacMoji(e.chat,a,"🍒",e)};handler.help=["invocar"],handler.tags=["grupos","admins"],handler.command=/^(invocar|todos|tagall)$/i,handler.admin=!0,handler.group=!0;export default handler;
