import e from"../lib/database.js";let handler=async(r,{args:i})=>{if(!i[0])return r.reply("Proporcione una cantidad...");let a=e.data.users[r.sender];if(a.salud>=100)return r.reply(`
Tu ❤️salud esta lleno
`.trim());let l=40+4*a.neko,n=1*Math.max(1,Math.min(Number.MAX_SAFE_INTEGER,isNumber(i[0])&&parseInt(i[0])||Math.round((100-a.salud)/l)));if(a.elixir<n)return r.reply(`
Tu 🥤elixir no es suficiente, tienes *${a.elixir}*
use el comando *

${Prefijo}comprar elixir ${n-a.elixir}
`.trim());a.elixir-=1*n,a.salud+=l*n,r.reply(`
Obtienes *${n}* 🥤elixir(s)
`.trim())};handler.help=["sanar"],handler.tags=["games"],handler.command=/^(sanar)$/i;export default handler;function isNumber(e){return e?"number"==typeof(e=parseInt(e))&&!isNaN(e):e}
