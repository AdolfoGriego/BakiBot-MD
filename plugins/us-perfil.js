import e from"axios";import a from"../lib/database.js";import{createHash as i}from"crypto";let handler=async(r,{conn:o,isPrems:n,isAdmin:d})=>{let t=await o.profilePictureUrl(r.sender,"image").catch(e=>"./multimedia/imagenes/avatar_contact.png"),s=await o.getName(r.sender),m=a.data.users[r.sender],p=i("md5").update(r.sender).digest("hex");e.get(`https://latam-api.vercel.app/api/infonum?apikey=${MyApiKey}&q=${r.sender.split("@")[0]}`).then(e=>{o.sendMessage(r.chat,{image:{url:t},caption:`      *💻 [ PERFIL DE USUARIO] 🌐*

          \`\`\`⚡ | INFO DE USUARIO | 👤\`\`\`
╭────────────────────────╮
${`*├➣👤Nombre:* `+s} ${n?"\n*├➣⭐Usuario premium:* ✅":"\n*├➣⭐Usuario premium:* ❎"} ${m.name.includes(s)?"":`
*├➣🔤Nombre registrado:* ${m.name}`} ${m.age<0?"":`
*├➣🔢Edad:* ${m.age}`} ${m.regTime<0?"":`
*├➣📆Fecha de registro:* ${formatDate(new Date(m.regTime).getTime())}`} ${p?`
*├➣🆔Codigo de registro:* ${p}`:""} ${d?"\n*├➣🌟Es administrador:* ✅":"\n*├➣🌟Es administrador:* ❎"} ${r.isGroup?"\n*├➣💟Solicitud desde:* Un Grupo":"\n*├➣💟Solicitud desde:* Chat privado"} ${"‎".repeat(850)} ${"\n*├➣🗺️Pais:* "+e.data.pais} ${"\n*├➣🗾Prefijo de pais:* "+e.data.pais_prefijo} ${"\n*├➣♟️Origen del n\xfamero:* "+e.data.ubicacion}
*├➣🔗Link de N\xfamero:* wa.me/${r.sender.split("@")[0]} ${e.data.valido?"\n*├➣📵N\xfamero valido:* ✅":"\n*├➣📵N\xfamero valido:* ❎"} ${e.data.linea_tipo?"\n*├➣📱Dispositivo mobil:* ✅":"\n*├➣📱Dispositivo mobil:* ❎"} ${"\n*├➣🏥Operadora:* "+e.data.operadora} ${"\n*├➣🌐Tipo de linea:* "+e.data.linea_tipo} ${"\n*├➣📍Formato local:* "+e.data.form_local} ${"\n*├➣🎈Formato internacional:* "+e.data.form_internacional} ${"\n*├➣🀄C\xf3digo de pais:* "+e.data.pais_codigo}
╰────────────────────────╯`},{quoted:r})},e=>{o.sendMessage(r.chat,{image:{url:t},caption:`.             *💻 [ PERFIL DE USUARIO] 🌐*

           \`\`\`⚡ | INFO DE USUARIO | 👤\`\`\`
╭────────────────────────╮
${`*├➣👤Nombre:* `+s} ${n?"\n*├➣ Usuario premium:* ✅":"\n*├➣ Usuario premium:* ❎"} ${m.name.includes(s)?"":`
*├➣🔰Nombre registrado:* ${m.name}`} ${m.age<0?"":`
*├➣🔢Edad:* ${m.age}`} ${m.regTime<0?"":`
*├➣📆Fecha de registro:* ${formatDate(new Date(m.regTime).getTime())}`} ${p?`
*├➣🆔Codigo de registro:* ${p}`:""} ${d?"\n*├➣🌟Es administrador:* ✅":"\n*├➣🌟Es administrador:* ❎"} ${r.isGroup?"\n*├➣💟Solicitud desde:* Un Grupo":"\n*├➣💟Solicitud desde:* Chat privado"} ${"‎".repeat(850)}
*├➣🔗Link de N\xfamero:* wa.me/${r.sender.split("@")[0]} 
╰───────────────────────╯`.trim()},{quoted:r})})};handler.help=["miperfil"],handler.tags=["casual"],handler.command=/^(miperfil)$/i;export default handler;
