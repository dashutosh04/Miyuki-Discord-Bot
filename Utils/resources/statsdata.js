const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
require("ms")
function uptime(client){
    const u = `\`${moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]")}\``;
    return u
}
function heapmem(client){
    const hmem =  `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``
    return hmem
}
function cpumodel(){
    const cpu = `\`${os.cpus().map(i => `${i.model}`)[0]}\``
    return cpu
}
function platform(){
    const platform = os.platform()
    return platform
}
function cpuusage(){
    const cpuusage = `\`35%\``
    return cpuusage
}
function cpuclocks(){
    const clocks = `\`${cpuStat.avgClockMHz()} Mhz\``
    return clocks
}
function cpucores(){
    const cores = `\`${cpuStat.totalCores()} Cores\``
    return cores
}
function ostype(){
    const ostype = os.type()
    return ostype
}
      
      
      
      
module.exports ={
    uptime,heapmem,ostype,cpucores,cpuclocks,cpumodel,platform,cpuusage

}