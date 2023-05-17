import e from"../lib/database.js";import a from"./rpg-diario.js";import r from"./rpg-mensual.js";import o from"./rpg-aventura.js";let inventory={others:{salud:!0,nkoins:!0,exp:!0,role:!0},items:{elixir:!0,basura:!0,madera:!0,roca:!0,cuerda:!0,esmeralda:!0,diamante:!0,oro:!0,hierro:!0},tools:{armadura:{0:"❌",1:"Armadura de cuero",2:"Armadura de hierro",3:"Armadura de oro",4:"Armadura de diamante",5:"Armadura Esmeralda",6:"Armadura de cristal",7:"Armadura de obsidiana",8:"Armadura abisal",9:"Armadura marchita",10:"Armadura de drag\xf3n",11:"Armadura de hacker"},espada:{0:"❌",1:"Espada de madera",2:"Espada de piedra",3:"Espada de hierro",4:"Espada de oro",5:"Espada de cobre",6:"Espada de diamante",7:"Espada de esmeralda",8:"Espada de obsidiana",9:"Espada abisal",10:"Samurai Slayer Espada Verde",11:"Espada Hacker"},pico:{0:"❌",1:"Pico de madera",2:"Pico de piedra",3:"Pico de hierro",4:"Pico de oro",5:"Pico de cobre",6:"Pico de diamante",7:"Pico de esmeralda",8:"Pico de cristal",9:"Pico de obsidiana",10:"Pico Netherite",11:"Pico Hacker"},fishingrod:!0},crates:{ordinario:!0,singular:!0,mitico:!0,legendario:!0,mascota:!0},pets:{caballo:10,neko:10,zorro:10,doge:10},cooldowns:{lastclaim:{name:"diario",time:a.cooldown},lastmonthly:{name:"mensual",time:r.cooldown},lastadventure:{name:"aventura",time:o.cooldown}}},handler=async(a,{conn:r})=>{let o=e.data.users[a.sender];o.role=global.rpg.role(o.level).name;let i=Object.keys(inventory.tools).map(e=>o[e]&&`*${global.rpg.emoticon(e)}${e}:* ${"object"==typeof inventory.tools[e]?inventory.tools[e][o[e]?.toString()]:`Nivel ${o[e]}`}`).filter(e=>e).join("\n").trim(),d=Object.keys(inventory.items).map(e=>o[e]&&`*${global.rpg.emoticon(e)}${e}:* ${o[e]}`).filter(e=>e).join("\n").trim(),n=Object.keys(inventory.crates).map(e=>o[e]&&`*${global.rpg.emoticon(e)}${e}:* ${o[e]}`).filter(e=>e).join("\n").trim(),t=Object.keys(inventory.pets).map(e=>o[e]&&`*${global.rpg.emoticon(e)}${e}:* ${o[e]>=inventory.pets[e]?"Niveles m\xe1ximos":`Nivel ${o[e]}`}`).filter(e=>e).join("\n").trim(),s=Object.entries(inventory.cooldowns).map(([e,{name:a,time:r}])=>e in o&&`*⌛${a}*: ${new Date-o[e]>=r?"✅":"❌"}`).filter(e=>e).join("\n").trim(),m=`
❐═══❮ 🍱 𝗜𝗡𝗩𝗘𝗡𝗧𝗔𝗥𝗜𝗢 - 𝗨𝗦𝗘𝗥 🍱 ❯═══❐

*❐ Inventario de:* \`\`\`${r.getName(a.sender)}\`\`\`

${Object.keys(inventory.others).map(e=>o[e]&&`*${global.rpg.emoticon(e)}${e}:* ${o[e]}`).filter(e=>e).join("\n")}${i?`

❐════❮ 🧰 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦  🧰 ❯════❐

${i}`:""}${d?`

❐═════❮ 🎛️ 𝗘𝗟𝗘𝗠𝗘𝗡𝗧𝗢𝗦 🎛️ ❯══════❐

${d}

*❍ 🎒 Total de elementos:* ${Object.keys(inventory.items).map(e=>o[e]).reduce((e,a)=>e+a,0)} elementos`:""}${n?`

❐════════❮ 📦 𝗖𝗔𝗝𝗔𝗦 📦 ❯═══════❐

${n}

*❍ 🎒 Total de cajas:* ${Object.keys(inventory.crates).map(e=>o[e]).reduce((e,a)=>e+a,0)} Cajas`:""}${t?`

❐══════❮ 🐩 𝗠𝗔𝗦𝗖𝗢𝗧𝗔𝗦 🐾❯══════❐

${t}`:""}${s?`

❐════❮ ❄️ 𝗘𝗡𝗙𝗥𝗜𝗔𝗠𝗜𝗘𝗡𝗧𝗢𝗦 🏔️ ❯════❐

${s}`:""}
`.trim();a.reply(m)};handler.help=["inventario"],handler.tags=["games"],handler.command=/^(inventario)$/i;export default handler;
