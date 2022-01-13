const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nowplaying",
  aliases: ["np"],
  utilisation: "{prefix}nowplaying",
  category: "Music",
  voiceChannel: true,
  category: "Music",

  async execute(client, message) {
    const queue = client.player.GetQueue(message.guild.id);
    if (!queue || !queue.playing)
      return message.reply(
        `${client.emotes.error} **No Music Playing right Now**`
      );

    const track = queue.tracks[0];
    bar = queue.createProgressBar("track");

    const embed = new MessageEmbed();
    embed.setColor("GREEN");
    embed.setAuthor({
      name: `Now Playing`,
      iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }),
    });
    embed.setDescription(
      `**Title** - \`${track.title}\` \n**Volume** - \`${queue.volume}%\` **\nDuration** - \`${track.human_duration}\``
    );
    embed.setTimestamp();
    if (bar) {
      embed.addFields({ name: "**Progress Bar**", value: bar });
    }
    if (queue.tracks.length > 1) {
      embed.setFooter({
        text: `There are ${queue.tracks.length} songs in the queue.`,
        iconURL: message.author.avatarURL({ dynamic: true }),
      });
    }
    await message.channel.send({ embeds: [embed] });
    await message.delete().catch((err) => {});
  },
};
