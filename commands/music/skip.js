const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'skip',
    aliases: [],
    description: "Join your vc",
    category: 'Music',
async execute(client, message) {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "You must Join a voice channel before using this command!"
    );
  let queue = message.client.queue.get(message.guild.id);

  if (!queue)
  return message.channel.send('There is nothing Playing');
  client.player.stop();


  return message.channel.send(`**Skipped the music :white_check_mark: **`);
}};
