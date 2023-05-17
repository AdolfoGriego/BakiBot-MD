let handler = async (m, { conn, args, command }) => {
    conn.math = conn.math ? conn.math : {}
    const buttons = Object.keys(modes).map(v => [v, `${Prefijo}${command} ${v}`])
    if (args.length < 1) return m.reply(`*Modos disponibles* : \n${Object.keys(modes).join('_\n_')}\n*Ejemplo de uso* : \n\n${Prefijo + command} maestro 
  `)
    let mode = args[0].toLowerCase()
    if (!(mode in modes)) return m.reply(`*✳️ Por favor use un modo valido*\n*Modos disponibles* : \n${Object.keys(modes).join('_\n_')}\n*📌 Ejemplo de uso*: \n\n${Prefijo + command} maestro 
  `)
    let id = m.chat
    if (id in conn.math) return conn.reply(m.chat, '🍒 Todavía hay preguntas sin respuesta en este chat.', conn.math[id][0])
    let math = genMath(mode)
    conn.math[id] = [
        await conn.reply(m.chat, `¿Cuál es el resultado de *${math.str}*?\n\n⏲️ Tiempo disponible: ${(math.time / 1000).toFixed(2)} segundos\nRecompensa por respuesta correcta: ${math.bonus} XP`, m),
        math, 4,
        setTimeout(() => {
            if (conn.math[id]) conn.sendButton(m.chat, `¡Se acabó el tiempo!\nLa respuesta es ${math.result}`, NombreDelBot, null, [['SIGUIENTE', `${Prefijo + command} ${math.mode}`], ...buttons], conn.math[id][0])
            delete conn.math[id]
        }, math.time)
    ]
}

handler.help = ['mates <modo>']
handler.tags = ['games']
handler.command = /^mates/i
handler.limit = 2
handler.group = true

let modes={kinder:[-3,3,-3,3,"+-",15e3,10],escuela:[-10,10,-10,10,"*/+-",2e4,40],colegio:[-40,40,-20,20,"*/+-",4e4,150],universidad:[-100,100,-70,70,"*/+-",6e4,350],maestro:[-999999,999999,-999999,999999,"*/",99999,9999],imposible:[-99999999999,99999999999,-99999999999,999999999999,"*/",3e4,35e3],wtf:[-999999999999999,999999999999999,-999,999,"/",3e4,5e4]}; // :V  //

let operators={"+":"+","-":"-","*":"\xd7","/":"\xf7"};

function genMath(e){let[r,t,n,u,a,c,l]=modes[e],f=randomInt(r,t),g=randomInt(n,u),h=pickRandom([...a]),i=Function(`return ${f} ${h.replace("/","*")} ${g<0?`(${g})`:g}`)();return"/"==h&&([f,i]=[i,f]),{str:`${f} ${operators[h]} ${g}`,mode:e,time:c,bonus:l,result:i}}

function randomInt(o,r){return o>r&&([o,r]=[r,o]),o=Math.floor(o),Math.floor(((r=Math.floor(r))-o)*Math.random()+o)}

handler.modes = modes

export default handler
