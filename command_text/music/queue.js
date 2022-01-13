const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "queue",
  aliases: ["q"],
  utilisation: "{prefix}queue 6",
  category: "Music",
  async execute(client, message, args) {
    const Queue = client.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current))
      return message.reply(":x: Nothing Playing Right now");
    var Index =
      args[0] &&
      Number(args[0]) &&
      Number(args[0]) < Queue.tracks.length &&
      Number(args[0]) > 0
        ? Number(args[0])
        : 0;

    var StringArrays = Queue.tracks.map(
      (track, index) =>
        `**Name :** \`${track.title}\`\n**Duration :** \`${track.human_duration}\``);
    StringArrays = StringArrays.slice(Index, Index + 5);
    StringArrays = StringArrays.filter(Boolean);
    if (Queue.tracks.length > StringArrays.length) {
      StringArrays.push(
        `More \`${Number(
          Queue.tracks.length - (5 + Index)
        )}+\` Tracks are Present in Queue`
      );
    }
    bar = Queue.createProgressBar("queue");
    const embed = new MessageEmbed();
    embed.setColor("GREEN");
    embed.setAuthor({
      name: `Now Playing`,
      iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }),
    });
    embed.setDescription(`${StringArrays.join("\n")}`);
    embed.setTimestamp();
    if (bar) {
      embed.addFields({ name: "**Progress Bar**", value: bar });
    }
    message.channel.send({ embeds: [embed] });
  },
};
