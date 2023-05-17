import*as e from"fs";let handler=async(a,{conn:t,args:r})=>{await t.profilePictureUrl(a.chat,"image").catch(e=>null);let n=await t.getName(a.sender);try{var l=await t.profilePictureUrl(a.sender,"image")}catch{var l="https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg"}try{var i=await global.getBuffer(l)}catch{var i=e.readFileSync("./multimedia/imagenes/avatar_contact.png")}t.relayMessage(a.chat,{extendedTextMessage:{text:`*❐═════❮ 𝗡𝗨𝗠𝗘𝗥𝗢 - 𝗟𝗜𝗠𝗞 ❯═════❐

*👤Solicitado por:* ${n} 

*🀄Su link directo de whatsapp es:*

🎈https://wa.me/${a.sender.split("@")[0]}

*O puede usar este otro*

https://api.whatsapp.com/send?phone=${a.sender.split("@")[0]} `,contextInfo:{externalAdReply:{title:"Toque aqui para ver una prueba del link",body:NombreDelBot,previewType:"PHOTO",thumbnailUrl:"",thumbnail:i,sourceUrl:`https://wa.me/${a.sender.split("@")[0]}?text=Hola+${n}%0D%0A%E1%B4%AE%CA%B8+%E1%B4%BA%E1%B4%B7`}}}},{})};handler.help=["wame"],handler.tags=["casual"],handler.command=/^(wame|wa.me)$/i;export default handler;
