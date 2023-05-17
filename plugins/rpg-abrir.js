import $ from"../lib/database.js";let rewards={ordinario:{nkoins:101,exp:201,basura:11,elixir:[0,1,0,1,0,0,0,0,0],ordinario:[0,1,0,1,0,0,0,0,0,0],singular:[0,1,0,0,0,0,0,0,0,0,0,0]},singular:{nkoins:201,exp:401,basura:31,elixir:[0,1,0,0,0,0,0],diamante:[0,1,0,0,0,0,0,0,0,0,0,0,0],ordinario:[0,1,0,0,0,0,0,0],singular:[0,1,0,0,0,0,0,0,0,0],mitico:[0,1,0,0,0,0,0,0,0,0,0,0,0],madera:[0,1,0,0,0,0],roca:[0,1,0,0,0,0],cuerda:[0,1,0,0,0,0]},mitico:{nkoins:301,exp:551,basura:61,elixir:[0,1,0,0,0,0],esmeralda:[0,1,0,0,0,0,0,0,0,0,0,0,0],diamante:[0,1,0,0,0,0,0,0,0,0],oro:[0,1,0,0,0,0,0,0,0],hierro:[0,1,0,0,0,0,0,0],ordinario:[0,1,0,0,0,0],singular:[0,1,0,0,0,0,0,0],mitico:[0,1,0,0,0,0,0,0,0,0],legendario:[0,1,0,0,0,0,0,0,0,0,0,0,0],mascota:[0,1,0,0,0,0,0,0,0,0,0],madera:[0,1,0,0,0],roca:[0,1,0,0,0],cuerda:[0,1,0,0,0]},legendario:{nkoins:401,exp:601,basura:101,elixir:[0,1,0,0,0],esmeralda:[0,1,0,0,0,0,0,0,0,0],diamante:[0,1,0,0,0,0,0,0,0],oro:[0,1,0,0,0,0,0,0],hierro:[0,1,0,0,0,0,0],ordinario:[0,1,0,0],singular:[0,1,0,0,0,0],mitico:[0,1,0,0,0,0,0,0,0],legendario:[0,1,0,0,0,0,0,0,0,0],mascota:[0,1,0,0,0,0,0,0,0,0],madera:[0,1,0,0],roca:[0,1,0,0],cuerda:[0,1,0,0]}},handler=async(e,{command:a,args:i})=>{let r=$.data.users[e.sender],o=Object.fromEntries(Object.entries(rewards).filter(([$])=>$&&$ in r)),n=`
Use formato *${Prefijo}${a} [caja] [valor]*
Ejemplo de uso: 

${Prefijo}${a} ordinario 1

📍Lista de cajas: 
${Object.keys(o).map($=>`
${rpg.emoticon($)}${$}
`.trim()).join("\n")}
`.trim(),t=(i[0]||"").toLowerCase(),m=1*Math.floor(isNumber(i[1])?Math.min(Math.max(parseInt(i[1]),1),Number.MAX_SAFE_INTEGER):1);if(!(t in o))return e.reply(n);if(r[t]<m)return e.reply(`
Su *caja tipo ${rpg.emoticon(t)}${t}* no es suficiente!, tienes ${r[t]} caja tipo *${rpg.emoticon(t)}${t}*
use el comando:

${Prefijo}comprar ${t} ${m-r[t]}

`.trim());let _={};for(let s=0;s<m;s++)for(let[l,d]of Object.entries(o[t]))if(l in r){let c=d.getRandom();c&&(r[l]+=1*c,_[l]=(_[l]||0)+1*c)}r[t]-=1*m,e.reply(`
Has abierto *${m}* caja(s) tipo ${global.rpg.emoticon(t)}${t} y obtienes:
${Object.keys(_).filter($=>$&&_[$]&&!/legendario|mascota|mitico|diamante|esmeralda/i.test($)).map($=>`
*${global.rpg.emoticon($)}${$}:* ${_[$]}
`.trim()).join("\n")}
`.trim());let u=_.diamante,p=_.mitico,g=_.mascota,f=_.legendario,b=_.esmeralda;(p||u)&&e.reply(`
Felicidades, tienes un art\xedculo raro, que es: ${u?`*${u}* ${rpg.emoticon("diamante")}diamante`:""}${u&&p?"y ":""}${p?`*${p}* ${rpg.emoticon("mitico")}mitico`:""}
`.trim()),(g||f||b)&&e.reply(`
Felicidades, tienes un art\xedculo \xe9pico, que es: ${g?`*${g}* ${rpg.emoticon("mascota")}mascota`:""}${g&&f&&b?", ":g&&f||f&&b||b&&g?"y ":""}${f?`*${f}* ${rpg.emoticon("legendario")}legendario`:""}${g&&f&&b?"y ":""}${b?`*${b}* ${rpg.emoticon("esmeralda")}esmeralda`:""}
`.trim())};handler.help=["abrir"].map($=>$+" [caja] [valor]"),handler.tags=["games"],handler.command=/^(abrir)$/i;export default handler;function isNumber($){return $?"number"==typeof($=parseInt($))&&!isNaN($):$}
