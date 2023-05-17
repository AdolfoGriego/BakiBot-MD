import t from"../lib/database.js";let handler=t=>t;handler.before=async function(e){if(!/^-?[0-9]+(\.[0-9]+)?$/.test(e.text))return!0;let a=e.chat;if(!e.quoted||!e.quoted.fromMe||!e.text||!/^¿Cuál es el resultado de/i.test(e.quoted.text))return!0;if(this.math=this.math?this.math:{},!(a in this.math))return this.sendMessage(e.chat,{text:"La pregunta ya fue resuelta..."},{quoted:e});if(e.quoted.id==this.math[a][0].id){let s=JSON.parse(JSON.stringify(this.math[a][1]));e.text==s.result?(t.data.users[e.sender].exp+=s.bonus,clearTimeout(this.math[a][3]),delete this.math[a],this.sendButton(e.chat,`*Respuesta correcta!*
Aqui tienes tu recompensa:
+${s.bonus} XP
`,NombreDelBot,null,[["SIGUIENTE",Prefijo+`mates ${s.mode}`]],e)):0==--this.math[a][2]?(clearTimeout(this.math[a][3]),delete this.math[a],e.reply(`*[ ! ] Se acabo el tiempo*
Respuesta: *${s.result}*`)):await e.reply(`*Respuesta incorrecta!*
Te quedan ${this.math[a][2]} oportunidades`)}return!0};export default handler;
