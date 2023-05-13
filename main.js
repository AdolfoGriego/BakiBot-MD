// TODO: reduce global variabel usage
/**
[ https://github.com/AdolfoGriego/ ]
**/
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.error)

import chalk from 'chalk';
import './config.js'
import Connection from './lib/connection.js'
import Helper from './lib/helper.js'
import db from './lib/database.js'
import clearTmp from './lib/clearTmp.js';
import {
  spawn
} from 'child_process'
import {
  protoType,
  serialize
} from './lib/simple.js'
import {
  plugins,
  loadPluginFiles,
  reload,
  pluginFolder,
  pluginFilter
} from './lib/plugins.js'

const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

// Assign all the value in the Helper to global
Object.assign(global, {
  ...Helper,
  timestamp: {
    start: Date.now()
  }
})

// global.opts['db'] = process.env['db']

/** @type {import('./lib/connection.js').Socket} */
const conn = Object.defineProperty(Connection, 'conn', {
  value: await Connection.conn,
  enumerable: true,
  configurable: true,
  writable: true
}).conn

// load plugins
loadPluginFiles(pluginFolder,pluginFilter,{logger:conn.logger,recursiveRead:!1}).then(e=>console.log(chalk.rgb(255,131,0).underline("\n[...] Se encontraron "+Object.keys(plugins).length+" plugins\n"))).catch(console.error);
global.plugins = {}


if (!opts['test']) {
  setInterval(async () => {
    await Promise.allSettled([
      db.data ? db.write() : Promise.reject('db.data es nulo'),
      (opts['autocleartmp'] || opts['cleartmp']) ? clearTmp() : Promise.resolve()
    ])
    /*Connection.store.writeToFile(Connection.storeFile)*/
  }, 60 * 1000)
}

setInterval(async () => { await clearTmp() }, 180000)

if (opts['server']) (await import('./server.js')).default(conn, PORT)

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  //console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) (conn?.logger || console).warn('\n\n[ IMPORTANTE ] : Por favor instalé el paquete ffmpeg para el envío de archivos multimedia\n[_>] (pkg install ffmpeg)\n\n')
  if (s.ffmpeg && !s.ffmpegWebp) (conn?.logger || console).warn('\n\n[ IMPORTANTE ] : Es posible que los stickers no estén animadas sin libwebp en ffmpeg\n[_>] (pkg install libwebp) ó (--enable-ibwebp while compiling ffmpeg)\n\n')
  if (!s.convert && !s.magick && !s.gm) (conn?.logger || console).warn('\n\n[ IMPORTANTE ] : Es posible que los stickers no funcionen sin imagemagick si libwebp y ffmpeg no esten instalados\n[_>] (pkg install imagemagick)\n\n')
}

_quickTest()
  .then(() => (conn?.logger?.info || console.log)('\n\n[_>] Prueba rápida realizada ✓\n'))
  .catch(console.error)
