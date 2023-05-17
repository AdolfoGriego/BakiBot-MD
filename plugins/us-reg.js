import e from"../lib/database.js";import a from"../lib/calendario.js";import{exec as r}from"child_process";import*as t from"fs";import{createHash as n}from"crypto";let handler=async function(i,{conn:o,text:d,command:s}){let m=e.data.users[i.sender];if(!0===m.registered)return i.reply(`*[ ! ] Ya estuviste registrado en mi base de datos*
Quieres volver a registrarte nuevamente?
Use el comando:  

${Prefijo}unreg <C\xf3digo de registro>
`);if(!d)return i.reply("Hola porfavor registrate bien\n*[ EJEMPLO ]*\n📌.reg Universe|17");if(!d.includes("|"))return i.reply(`*[ ! ] Por favor agregue una barra en medio de nombre y edad*

" | "
`);let l=d.substring(0,d.indexOf("|")-0),g=d.substring(d.lastIndexOf("|")+1)||"-",u=n("md5").update(i.sender).digest("hex");if(isNaN(g))return await i.reply(`*[ ! ] En edad solo se aceptan n\xfameros -.-*`);if(l.length>=20)return i.reply("*[ ! ] Bruh el nombre es muy largo ._.*");if(g>31)return i.reply(`*[ ! ] Maximo de edad 30 a\xf1os*`);if(g<12)return i.reply(`*[ ! ] Minimo de edad 13 a\xf1os*`);let p=l,c=Math.round(g),f=c<"15"?"Puberto(a)":c<"18"?"Adolecente":c<"25"?"Joven":c<"30"?"Adulto(a)":"";try{var h=(await o.fetchStatus(i.sender)).status}catch{var h="-"}let y=h.length<5?a.fechaCompleta:"Info: "+h,$=await o.getName(i.sender),b=await o.profilePictureUrl(i.sender,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png");await i.reply(MultiNK.Proces($));let v=`           「  *REGISTRO* 」

*📅 Fecha de registro:*
${a.fechaCompleta}.

╭─────────────────────ঐ
*❐👤Nombre Registrado* : ${p}
*❐🔰️Nombre usado en whatsapp* : ${$}
*❐🔢Edad* : ${c}
*❐👨‍👩‍👧‍👦De acuerdo a tu edad eres un(a)* : ${f}
*❐💻Informaci\xf3n* : ${h}
*❐💡N\xba* : wa.me/${i.sender.split("@")[0]}
╰─────────────────────ঐ

\`\`\`Codigo de registro:\`\`\` ${u}.py 

Puede copiar su código de registro eliminando el .py`.trim();m.name=p.trim(),m.age=c,m.regTime=+new Date,m.registered=!0,r(`magick './multimedia/imagenes/registro.jpg' -gravity west -fill '#ffffff' -font './multimedia/imagenes/font-gue.ttf' -size 1280x710 -pointsize 50 -interline-spacing 7.5 -annotate +440-45 'Nombre: ${p}' -pointsize 50 -annotate +440+83 'Edad: ${c} | ${f}' -pointsize 45 -annotate +440+210 '${y}' './multimedia/imagenes/rgdata.jpg' -resize %[fx:t?u.w*0.2:u.w] -gravity center -geometry -430+70 -composite 'multimedia/imagenes/rgx.jpg'`).on("error",()=>i.reply("error")).on("exit",()=>{try{o.sendMessage(i.chat,{image:t.readFileSync("./multimedia/imagenes/rgx.jpg"),caption:v},{quoted:i})}catch{o.sendMessage(i.chat,{image:{url:b},caption:v},{quoted:i})}})};handler.help=["rg"].map(e=>e+" <Nombre>|<Edad>"),handler.tags=["casual"],handler.command=/^(rg|reg)$/i;export default handler;
