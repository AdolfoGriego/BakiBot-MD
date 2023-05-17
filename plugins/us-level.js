import e from"../lib/database.js";import{xpRange as a}from"../lib/levelling.js";let handler=async(i,{conn:n,args:t,command:r})=>{let{exp:l,level:o,role:s,lastclaim:d,registered:m,regTime:c}=e.data.users[i.sender],{min:u,xp:v,max:p}=a(o,global.multiplier),g=await n.getName(i.sender),h=await n.profilePictureUrl(i.sender).catch(e=>"./multimedia/imagenes/avatar_contact.png");var b="";o<=2?b="[ - - - - - - - - - - ]":o<=9?b="[# - - - - - - - - - ]":o<=19?b="[## - - - - - - - - ]":o<=29?b="[### - - - - - - - ]":o<=39?b="[#### - - - - - - ]":o<=49?b="[##### - - - - - ]":o<=59?b="[###### - - - - ]":o<=69?b="[####### - - - ]":o<=79?b="[######## - - ]":o<=89?b="[######### - ]":o<=99&&(b="[##########]");let w=`
╭════❮ 𝗨𝗦𝗘𝗥 - 𝗟𝗘𝗩𝗘𝗟 ❯═════❐
*👤 Usuario:* ${m?"("+g+") ":""} ( @${i.sender.split("@")[0]} )
*🔰 Registrado:* ${m?"S\xed ("+new Date(c).toLocaleString()+")":"No"} ${d>0?"\n*⏲️ \xdaltimo reclamo:* "+new Date(d).toLocaleString():""}
*☄️ Nombre:* <${g}>
*✨ XP conseguido asta el momento:* (${l-u} / ${v})
*♦️ Su nivel actual es:* ${o} ${v<l-u?`<Ya puedes subir de nivel, use el comando ${Prefijo}subirnivel >`:""}
*👨‍👩‍👧‍👦 De acuerdo al nivel es:* ${s}
*🃏 Progreso de nivel:* ${b}
╰═════════════════════❐

🃏 Use el comando *${Prefijo}inventario* para ver tu inventario RPG
`.trim();await n.sendMessage(i.chat,{image:{url:h},caption:w,mentions:n.parseMention(w)},{quoted:i})};handler.help=["minivel"],handler.tags=["xp"],handler.command=/^(minivel)$/i;export default handler;
