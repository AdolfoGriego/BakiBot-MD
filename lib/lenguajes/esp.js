//Lenguaje por defecto
const Lengua = () => {
  return 'es' //Prefijo español
}
const Habla = () => {
	return 'Lenguaje Español' //:v
}

//Límite/Nivel
const AdLimite = (usedPrefix) => {
  return `♥••*•.☆•❬ 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘 𝗟𝗜𝗠𝗜𝗧𝗘𝗦 ❭•☆.•*´¨*••♥\n\n⚠️ ${name} te quedaste sin limites para usar los comandos del bot\n✳️ Puedes usar el comando ${usedPrefix}comprar para comprar limites`
}
const AdNivel = (plugin, _user) => {
  return `🍒｡･ﾟ♡ﾟ･｡🍓｡･❮ 𝗔𝗟𝗘𝗥𝗧𝗔 𝗗𝗘 𝗡𝗜𝗩𝗘𝗟 ❯･｡🍓｡･ﾟ♡ﾟ･｡🍒\n\n✳️ Necesitas el nivel *${plugin.level}* para empezar a usar este comando\n\n📌 Tu nivel actual es *${_user.level}*`
}

//Refrescar
const SpamerNot0 = (name) => {
  return `${name} Porfavor no me sature, se paciente UwU`
}
const SpamerNot1 = () => {
  return `✿❯────「𝗦𝗣𝗔𝗠 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 」────❮✿\n\n@${num.split('@')[0]} Espere unos 3 segundos para usar otro comando (⁠｡⁠•́⁠︿⁠•̀⁠｡⁠)`
}

//Mensaje de error
const ErrorMsj = (m, usedPrefix, command, args, text) => {
  return `*-漫~*'¨¯¨'*·舞~❮ 𝗘𝗥𝗥𝗢𝗥 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 ❯~舞*'¨¯¨'*·~漫-\n\n*🕊️ Plugin:* ${m.plugin}\n*👤 Cliente:* wa.me/${m.sender.split("@")[0]}\n*💭 Chat:* ${m.chat}\n*🍥 Comando:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\` \n`
}

//Restringido desactivado
const RestriN = () => {
  return `｡.•*¨*•♬✧❮ 𝗠𝗢𝗗𝗢 𝗥𝗘𝗦𝗧𝗥𝗜𝗡𝗚𝗜𝗗𝗢 ❯✧♬•*¨*•.｡\n\n💭 No se pudo eliminar al participante nuevo\n📌 por favor active el modo restringido`
}

//Prefijo +1 activar con un comando aparte
const AlertList = () => {
  return `Eliminar números que inicien con   '1'   de global.FakeList en ./config.js`
}

//Textos de bienvenida
const WlcAdd = (num, groupMetadata, fesha, gpdesc) => {
  return `.•*¨*•.¸¸♪ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ♪¸¸.•*¨*•.\n👤 *Bienvenid@ @${num.split("@")[0]} a este grandioso grupo* ${groupMetadata.subject}\n📆 *Fecha de ingreso | ${fesha}*\n🍷 *Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas* ;)\n\n📜 *Normas del grupo actualmente:* \n${String.fromCharCode(8206).repeat(850)}\n${gpdesc}`
}
const WlcRemove = (num, fesha) => {
  return `.•*¨*•.¸¸♪ 𝗙𝗔𝗥𝗘𝗪𝗘𝗟𝗟♪¸¸.•*¨*•.\n\`\`\`🍒 Adios @${num.split("@")[0]}\`\`\`\n*⎔ Fecha de salida:* ${fesha}`
}
const Gbay = () => {
  return `😕Adios...${String.fromCharCode(8206).repeat(850)}`
}
const WlcPromot = (num, groupMetadata) => {
	return `❖ ── ✦ ──『 𝗔𝗗𝗠𝗜𝗡 𝗡𝗨𝗘𝗩𝗢 』── ✦ ── ❖\n\n🎊 Felicidades *@${num.split('@')[0]}*\n💭 Ahora eres admin del grupo: *${groupMetadata.subject}*`
}
const WlcDemot = (num, groupMetadata) => {
	return `❖ ── ✦ ──『 𝗔𝗗𝗠𝗜𝗡 𝗣𝗘𝗥𝗗𝗜𝗗𝗢 』── ✦ ── ❖\n\n*😔 Lo siento *@${num.split('@')[0]}*\n🌩️ Ya no es administrador del grupo: *${groupMetadata.subject}*`
}

//Ajustes de grupo
const GpUp1 = () => {
  return `*❐════[ 🔒 𝗚𝗥𝗨𝗣𝗢 𝗖𝗘𝗥𝗥𝗔𝗗𝗢 🔒 ]════❐*‏‏‎‎\nA hora solo los administradores pueden enviar mensajes`
}
const GpUp2 = () => {
  return `‏‏*❐════[ 🔓 𝗚𝗥𝗨𝗣𝗢 𝗔𝗕𝗜𝗘𝗥𝗧𝗢 🔓 ]════❐*\nA hora todos los participantes pueden envíar mensajes`
}
const GpUp3 = () => {
  return `🧰 *[𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢𝗦 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢]* ⚙️\nA hora solo los administradores pueden editar los ajustes del grupo`
}
const GpUp4 = () => {
  return `🧰 *[𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢𝗦 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢]* ⚙️\nA hora todos los participantes pueden editar los ajistes del grupo\n*💭 Porfavor estar atentos con personas con retraso mental*`
}
const GpUp5 = (groupUpdate) => {
  return `✍️ *[ 𝗡𝗨𝗘𝗩𝗢 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗖𝗔𝗠𝗕𝗜𝗔𝗗𝗢 ]* 🤳\n\n*Nombre nuevo:* ${groupUpdate.subject}`
}

//Mensajes eliminados
const DelMsj = (mtype, participant, moment, feccha) => {
  return `ೋ══❮ 🚮 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗢𝗦 🚮 ❯══ೋ\n\n*📵 Tipo De Mensaje:* ${mtype}\n*🚮 Usuario:* @${participant.split`@`[0]}\n*📆 Fecha:* ${feccha}`
}

//No llamadas
const CallNot = (call) => {
  return `❐════❮ 📵 𝗔𝗡𝗧𝗜 𝗟𝗟𝗔𝗠𝗔𝗗𝗔𝗦 📵 ❯════❍\n\nHola *@${call.from.split('@')[0]}* Seras bloqueado(a)\n*📌 Razon:* por realizar una ${call.isVideo ? 'videollamada' : 'llamada'} a este numero sin autorizacion dela creadora del Bot\n`
}

//Mensaje de advertencia
const MsjRowner = () => {
  return `❐═════「🔰𝗕𝗢𝗧 - 𝗔𝗩𝗜𝗦𝗢 🗣️」══════❐\n\n𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 *𝘥𝘦𝘴𝘥𝘦 𝘦𝘭 𝘣𝘰𝘵 𝘱𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭.*`
}
const MsjOwner = () => {
  return `❐═「 🏆 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 - 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👩🏻‍💻 」═❐\n\n𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘱𝘰𝘳 𝘭𝘢 *𝘤𝘳𝘦𝘢𝘥𝘰𝘳𝘢 𝘥𝘦𝘭 𝘣𝘰𝘵.*`
}
const MsjMods = () => {
  return `❐═「 🏆 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 - 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👩🏻‍💻 」═❐\n\n𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘱𝘰𝘳 𝘭𝘢 *𝘤𝘳𝘦𝘢𝘥𝘰𝘳𝘢 𝘥𝘦𝘭 𝘣𝘰𝘵.*`
}
const MsjPremium = () => {
  return `❐══「 🌟𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 - 𝗣𝗥𝗘𝗠𝗜𝗨𝗠👑 」══❐\n\n𝘌𝘴𝘵𝘢 𝘴𝘰𝘭𝘪𝘤𝘪𝘵𝘶𝘥 𝘦𝘴 𝘴𝘰𝘭𝘰 𝘱𝘢𝘳𝘢 *𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘱𝘳𝘦𝘮𝘪𝘶𝘮.*`
}
const MsjGroup = () => {
  return `❐═══「 🎴𝗖𝗢𝗠𝗔𝗡𝗗𝗢 - 𝗚𝗥𝗨𝗣𝗢𝗦🎴」══❐\n\n𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘴𝘦 𝘱𝘶𝘦𝘥𝘦 𝘶𝘴𝘢𝘳 𝘦𝘯 *𝘨𝘳𝘶𝘱𝘰𝘴.*`
}
const MsjPrivate = () => {
  return `❐═══「 🔰 𝗣𝗥𝗜𝗩𝗔𝗗𝗢 - 𝗖𝗛𝗔𝗧💬 」════❐\n\n𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘴𝘦 𝘱𝘶𝘦𝘥𝘦 𝘶𝘴𝘢𝘳 𝘱𝘰𝘳 *𝘤𝘩𝘢𝘵 𝘱𝘳𝘪𝘷𝘢𝘥𝘰.*`
}
const MsjAdmin = () => {
  return `❐═══「 👑𝗔𝗗𝗠𝗜𝗡𝗦 - 𝗚𝗥𝗨𝗣𝗢𝗦👑 」═══❐\n\n𝘌𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘴𝘰𝘭𝘰 𝘱𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘶𝘴𝘢𝘥𝘰 𝘱𝘰𝘳 𝘭𝘰𝘴 *𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.*`
}
const MsjBotAdmin = () => {
  return `❐═════「 👑𝗔𝗗𝗠𝗡 - 𝗕𝗢𝗧🤖 」══════❐\n\n𝘕𝘦𝘤𝘦𝘴𝘪𝘵𝘰 *𝘴𝘦𝘳 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘢* 𝘱𝘢𝘳𝘢 𝘶𝘴𝘢𝘳 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰.`
}
const MsjUnreg = () => {
  return `❐════「 🗃️𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 - 𝗥𝗘𝗚📑 」════❐\n\n𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘦𝘴𝘦 𝘱𝘢𝘳𝘢 𝘤𝘰𝘮𝘦𝘯𝘻𝘢𝘳 𝘢 𝘶𝘴𝘢𝘳 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰𝘯 𝘦𝘴𝘤𝘳𝘪𝘣𝘪𝘦𝘯𝘥𝘰:\n*📌 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:* .reg Cosmos|17`
}
const MsjRestrict = () => {
  return `❐═════「 🔰𝗙𝗨𝗡𝗖𝗜𝗢𝗡 - 𝗕𝗢𝗧🤖」══════❐\n\n𝘌𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰𝘯 𝘴𝘦 𝘦𝘯𝘤𝘶𝘦𝘯𝘵𝘳𝘢 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘢𝘥𝘢.`
}

//Mensaje inicial
const Proces = (name) => {
  return `❐═══❮🔄𝗔𝗡𝗔𝗟𝗜𝗭𝗔𝗡𝗗𝗢 - 𝗣𝗥𝗢𝗖𝗘𝗦𝗔𝗡𝗗𝗢🔄❯═══❐\n\n*❐👤 Usuario:* \`\`\`${name}\`\`\`\n\n𝘏𝘰𝘭𝘢, 𝘦𝘴𝘵𝘰y 𝘢𝘯𝘢𝘭𝘪𝘻𝘢𝘯𝘥𝘰 𝘴𝘶 𝘱𝘦𝘥𝘪𝘥𝘰 𝘭𝘶𝘦𝘨𝘰 𝘭𝘰 𝘱𝘳𝘦𝘤𝘦𝘴𝘰 𝘱𝘰𝘳𝘧𝘢𝘷𝘰𝘳 𝘦𝘴𝘱𝘦𝘳𝘦...`
}
const Bsqd = (name) => {
  return `❐════❮♦️𝗣𝗥𝗢𝗖𝗘𝗦𝗔𝗡𝗗𝗢 - 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔♠️❯═══❐\n\n*❍👤 Usuario:* \`\`\`${name}\`\`\`\n\n𝘏𝘰𝘭𝘢, 𝘦𝘴𝘵𝘰𝘺 𝘣𝘶𝘴𝘤𝘢𝘯𝘥𝘰 𝘴𝘶 𝘱𝘦𝘥𝘪𝘥𝘰 𝘱𝘰𝘳𝘧𝘢𝘷𝘰𝘳 𝘦𝘴𝘱𝘦𝘳𝘦 >///<`
}

//Mensaje de error
const Error0 = () => { 
	return `❐═══❮ 𝗘𝗥𝗥𝗢𝗥 - 𝗦𝗜𝗦𝗧𝗘𝗠𝗔 ❯═══❐\nHubo un error en mi sistema porfavor intentelo nuevamente.`
}
const Error1 = () => {
	return `❐═══❮ 𝗘𝗥𝗥𝗢𝗥 - 𝗗𝗘𝗦𝗖𝗢𝗡𝗢𝗖𝗜𝗗𝗢  ❯═══❐\n Hubo un error inesperado u.u️`
}

export default { Lengua, Habla, AdLimite, AdNivel, SpamerNot0, SpamerNot1, ErrorMsj, RestriN, WlcAdd, WlcRemove, Gbay, WlcPromot, WlcDemot, GpUp1, GpUp2, GpUp3, GpUp4, GpUp5, DelMsj, CallNot, MsjRowner, MsjOwner, MsjMods, MsjPremium, MsjGroup, MsjPrivate, MsjAdmin, MsjBotAdmin, MsjUnreg, MsjRestrict, Proces, Bsqd, Error0, Error1 };