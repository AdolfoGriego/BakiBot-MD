/*
[ Jadibot-By Aiden ]
*/
import e from"../lib/connection.js";let handler=async(a,{conn:r})=>{(await e.conn).user.jid==r.user.jid?r.reply(a.chat,"Por favor use el comando desde el n\xfamero principal del Bot!",a):(await r.reply(a.chat,"Cerrando conexi\xf3n para Sub-Bots...\nᴱˡ ᵇᵒᵗ ᵖʳᶦⁿᶜᶦᵖᵃˡ ˢᵘᶠʳᶦʳᵃ́ ᵘⁿ ᵖᵉᑫᵘᵉⁿ̃ᵒ ʳᵉᶦⁿᶦᶜᶦᵒ ᵈᵉ ʳᵉᵈ",a),r.ws.close())};handler.help=["stopserbot"],handler.tags=["esclabot"],handler.command=/^(stopserbot)$/i,handler.owner=!0,handler.fail=null;export default handler;
