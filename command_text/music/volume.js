const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "volume",
  aliases: [],
  description: "Changes Volume of the Song",
  category: "Music",
  utilisation: "{prefix}Volume Args",
  async execute(client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)
      return message.channel.send(
        "You must Join a voice channel before using this command!"
      );

    const queue = client.player.GetQueue(message.guild.id);
    if (!queue) return message.reply(":x: Nothing Playing Right now");
    if (!args[0]) return message.channel.send("ok");

    if (args[0] > 200)
      return message.channel.send(`Can't Increase colume above 200%`);

    queue.volume = args[0];
    const Embed1 = new MessageEmbed()
      .setColor("#53ff1a")
      .setURL()
      .setThumbnail()
      .setDescription(`:speaker: Volume: ${queue.volume}`);
    message.channel.send({ embeds: [Embed1] });
    message.delete().catch((err) => {});
  },
};