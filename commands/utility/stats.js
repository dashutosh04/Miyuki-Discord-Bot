const {MessageEmbed} = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
module.exports = {
    name: 'stats',
    aliases: [],
    utilisation: '{prefix}stats',
    category: 'Utility',
execute: async (client, message, args) => {
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const uptime = `\`\`${moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]")}\`\``;
      const hmem =  `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``
      const cpu = `\`${os.cpus().map(i => `${i.model}`)[0]}\``
      const ping = `\`\`${(client.ws.ping)}ms\`\``
      const platform = os.platform()
      const cpuusage = `\`${percent.toFixed(2)}%\``
      const hostname = `\`\`${os.hostname()}\`\``
      const clocks = `\`\`${cpuStat.avgClockMHz()} Mhz\`\``
      const cores = `\`\`${cpuStat.totalCores()} Cores\`\``
      const ostype = os.type()
      const stats = new MessageEmbed()
        .setAuthor(client.user.username ,`${message.author.displayAvatarURL({size:2048,dynamic:true})}` )
        .setTitle("__**Stats:**__")
        .setColor("RANDOM")
        .addField(`**__NODE STATS__**`,  `Information about the node where the bot is hosted.`)
        .addFields(
            { name: 'Memory Usage', value: hmem , inline: true},
            { name: 'Cpu Usage', value: cpuusage, inline: true},    
            { name: 'Cpu Model ', value: cpu, inline: true },
            { name: 'Core Count ', value: cores, inline: true },
            { name: 'Clock Speed ', value: clocks, inline: true },
            { name: 'Hostname ', value: hostname, inline: true },
        )
        .addField(`**__BOT STATS__**`,  `Some stats about the bot`)
        .addFields(
            { name: 'Users', value: `\`\`${client.users.cache.size}\`\``, inline: true},
            { name: 'Servers', value: `\`\`${client.guilds.cache.size}\`\``, inline: true},
            { name: 'Channels', value: `\`\`${client.channels.cache.size}\`\``, inline: true},
            { name: 'Latency', value: ping , inline: true},
            { name: 'Uptime', value: uptime , inline: true},
        )
        .addField(`**__VERSION STATS__**`,  `Version of some other stuff.`)  
        .addFields(   
          
            { name: 'Discord.js ', value: `\`\`v${version}\`\`` , inline: true},
            { name: 'Nodejs ', value: `\`\`${process.version}\`\`` , inline: true},
            { name: 'Platform ', value: `\`\`${ostype} ${platform}\`\`` , inline: true},
            
            
        )
        .setTimestamp() 
          
        message.reply({ embeds: [stats] });
  });
  }
  };