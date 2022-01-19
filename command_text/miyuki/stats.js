const { MessageEmbed } = require("discord.js");
const statdata = require("../../utils/resources/statsdata.js");
const { version } = require("discord.js");
const os = require("os");
module.exports = {
  name: "stats",
  aliases: [],
  utilisation: "{prefix}stats",
  category: "Utility",
  async execute(client, message, args) {
    let member = 0;
    client.guilds.cache.forEach((guild) => {
      member += guild.memberCount;
    });

    const stats = new MessageEmbed()
      .setAuthor({
        name: `Miyuki Stats`,
        iconURL: `${message.user.avatarURL({
          size: 2048,
          dynamic: true,
        })}`,
      })
      .setColor("BLACK")
      .addField(
        `> **NODE STATS**`,
        `Information about the node where the bot is hosted.`
      )
      .addFields(
        { name: "🧊 Memory Usage", value: statdata.heapmem(), inline: true },
        { name: "🤖 Cpu Usage", value: statdata.cpuusage(), inline: true },
        { name: "✨ Cpu Model ", value: statdata.cpumodel(), inline: true },
        { name: "🔢 Core Count ", value: statdata.cpucores(), inline: true },
        { name: "🎆 Clock Speed ", value: statdata.cpuclocks(), inline: true },
        { name: "⌚ Uptime", value: statdata.uptime(client), inline: true }
      )
      .addField(`> **BOT STATS**`, `Some stats about the bot`)
      .addFields(
        { name: "👯 Users", value: `\`${member}\``, inline: true },
        {
          name: "<:Partner:852962850652946468> Servers",
          value: `\`${client.guilds.cache.size}\``,
          inline: true,
        },
        {
          name: "<:channel:852963275267113031> Channels",
          value: `\`${client.channels.cache.size}\``,
          inline: true,
        },
        { name: "⏲️ Latency", value: `\`${client.ws.ping}ms\``, inline: true }
      )
      .addField(`> **VERSION STATS**`, `Version of some other stuff.`)
      .addFields(
        {
          name: "<:Staff:852962560370016316> Discord.js ",
          value: `\`v${version}\``,
          inline: true,
        },
        {
          name: ":link: Nodejs ",
          value: `\`${process.version}\``,
          inline: true,
        },
        { name: "💫 Platform ", value: `\`${os.platform()}\``, inline: true }
      )
      .setTimestamp();

    message.cahnnel.send({ embeds: [stats] });
  },
};
