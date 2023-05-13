let handler=async(e,{conn:n,text:r,command:a})=>{let l=await n.getName(e.sender),t=[],s=r.split("|");if(!s[1])return e.reply("*📌 Use el formato*\n\n"+Prefijo+a+" Mensaje|elecci\xf3n1|elecci\xf3n2\n");if(s[12])return e.reply("*Ejemplo de uso correcto* :\n\n"+Prefijo+a+" En este grupo hay mas|hombres|mujeres\n");for(let o=1;o<s.length;o++)t.push([s[o]]);let u=`*📊 Encuesta realizada por* : ${l}

*- Mensaje:* ${r.split("|")[0]}`;return n.sendPoll(e.chat,u,t,e)};handler.help=["encuesta"],handler.tags=["grupos"],handler.command=/^(encuesta)$/i,handler.group=!0;export default handler;
