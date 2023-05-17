import{format as e}from"util";import r from"../lib/database.js";let debugMode=!1,winScore=4999,playScore=99;export async function before(t){let a,i=!1,n=!1,s=!1;this.game=this.game?this.game:{};let o=Object.values(this.game).find(e=>e.id&&e.game&&e.state&&e.id.startsWith("tictactoe")&&[e.game.playerX,e.game.playerO].includes(t.sender)&&"PLAYING"==e.state);if(o){if(!/^([1-9]|rendirse)$/i.test(t.text)||(s=!/^[1-9]$/.test(t.text),t.sender!==o.game.currentTurn&&!s))return!0;if(debugMode&&t.reply("[DEBUG]\n"+require("util").format({isSurrender:s,text:t.text})),!s&&1>(a=o.game.turn(t.sender===o.game.playerO,parseInt(t.text)-1)))return t.reply({"-3":"El juego ha terminado","-2":"Inv\xe1lido","-1":"Posici\xf3n inv\xe1lida",0:"Posici\xf3n inv\xe1lida"}[a]),!0;t.sender===o.game.winner?i=!0:511===o.game.board&&(n=!0);let m=o.game.render().map(e=>({X:"❌",O:"⭕",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣"})[e]);s&&(o.game._currentTurn=t.sender===o.game.playerX,i=!0);let l=s?o.game.currentTurn:o.game.winner,d=`
${i?`@${(s?o.game.currentTurn:o.game.winner).split("@")[0]} Victoria! (+${winScore} XP)`:n?`Juego terminado, empate (+${playScore} XP)`:`Turno de @${o.game.currentTurn.split("@")[0]}`}

${m.slice(0,3).join("")}
${m.slice(3,6).join("")}
${m.slice(6).join("")}
        
❌ = @${o.game.playerX.split("@")[0]}
⭕ = @${o.game.playerO.split("@")[0]}

*📌 Para rendirse pon*

rendirse

😀 para darse por vencido
`.trim(),g=r.data.users;(o.game._currentTurn^s?o.x:o.o)!==t.chat&&(o[o.game._currentTurn^s?"x":"o"]=t.chat),o.x!==o.o&&await this.sendMessage(o.x,{text:d,mentions:this.parseMention(d)},{quoted:t}),await this.sendMessage(o.o,{text:d,mentions:this.parseMention(d)},{quoted:t}),(n||i)&&(g[o.game.playerX].exp+=playScore,g[o.game.playerO].exp+=playScore,i&&(g[l].exp+=winScore-playScore),debugMode&&t.reply("[DEBUG]\n"+e(o)),delete this.game[o.id])}return!0}
