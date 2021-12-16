const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nowplaying",
  aliases: ["np"],
  utilisation: "{prefix}nowplaying",
  category: "Music",
  voiceChannel: true,

  execute(client, message) {
    const queue = client.player.GetQueue(message.guild.id);
    if (!queue || !queue.playing)
      return message.channel.send(
        `${client.emotes.error} **No Music Playing right Now**`
      );

    const track = queue.tracks[0];
    bar = queue.createProgressBar("queue");

    const embed = new MessageEmbed();
    embed.setColor("GREEN");
    embed.setThumbnail(track.thumbnail);
    embed.setAuthor(
      `Now Playing`,
      client.user.displayAvatarURL({ size: 1024, dynamic: true })
    );
    embed.setDescription(
      `**Title** - \`${track.title}\` \n**Volume** - \`${queue.volume}%\` **\nDuration** - \`${track.human_duration}\`**\nRequested by** - \`${queue.message.author.username}\`\n**Voice Channel** - <#${queue.message.member.voice.channel.id}>`
    );
    embed.setTimestamp();
    if (bar) {
      embed.addFields({ name: "**Progress Bar**", value: bar });
    }
    if (queue.tracks.length > 1) {
      embed.setFooter(
        `There are ${queue.tracks.length} songs in the queue.`,
        message.author.avatarURL({ dynamic: true })
      );
    }
    message.channel.send({ embeds: [embed] });
    message.delete().catch((err) => {});
  },
};
