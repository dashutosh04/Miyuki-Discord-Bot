
const { MessageEmbed } = require("discord.js");
module.exports = (client, queue, track) => {
  if (queue && queue.message) {
    queue.metadata.message.channel.send(
      `${client.emotes.queue} **|** Playlist was successfully added to the queue.`
    );
  }
};