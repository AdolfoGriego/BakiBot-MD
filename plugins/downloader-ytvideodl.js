import ytdl from "ytdl-core";
import fs from "fs";

let handler = async (m, { conn, args, isPrems, isOwner }) => {
  const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
  };
  if (args.length === 0) {
    m.reply(`*[❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*`);
    return;
  }
  try {
    let urlYt = args[0];
    if (!urlYt.startsWith("http")) {
      m.reply(`*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*`);
      return;
    }
    let infoYt = await ytdl.getInfo(urlYt);
    let titleYt = infoYt.videoDetails.title;
    let randomName = getRandom(".mp4");
    const stream = ytdl(urlYt, { filter: (info) => info.itag == 22 || info.itag == 18, }).pipe(fs.createWriteStream(`./tmp/${randomName}`));
    m.reply(global.wait);
    //console.log("Descargando ->", urlYt);
    await new Promise((resolve, reject) => {
      stream.on("error", reject);
      stream.on("finish", resolve);
    });
    let stats = fs.statSync(`./tmp/${randomName}`);
    let fileSizeInBytes = stats.size;
    let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    //console.log("Tamaño del video: " + fileSizeInMegabytes);
    if (fileSizeInMegabytes <= 999) {
      conn.sendMessage( m.chat, { document: fs.readFileSync(`./tmp/${randomName}`), fileName: `${titleYt}.mp4`, mimetype: "video/mp4", }, { quoted: m });
    } else {
      m.reply(`*[❗] 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙴𝚂 𝚂𝚄𝙿𝙴𝚁𝙸𝙾𝚁 𝙰 𝟿𝟿𝟿 𝙼𝙱*`);
    }
    fs.unlinkSync(`./tmp/${randomName}`);
  } catch (e) {
    m.reply(e.toString());
  }
};
handler.help = ["ytd"];
handler.tags = ["downloader"];
handler.command = ["videodoc", "documentvid", "videodocumento"];
handler.exp = 3;
export default handler;
