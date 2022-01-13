const { MessageEmbed } = require("discord.js");

module.exports = (client, queue, track) => {
  const ts = new MessageEmbed()
    .setTitle("MUSIC PLAYER")
    .setColor("#7ED0DF")
    .setDescription(
      `${client.emotes.music} - **STARTING MUSIC** \n**Title** - \`${track.title}\` \n **Requested By**:- \`${track.requestedBy.username}\``
    )

    .setImage("https://i.imgur.com/pOCJuO0.gif");

  if (queue.tracks.length > 1) {
    ts.setFooter({text:`There are ${queue.tracks.length} songs in the queue.`});
  }
  ts.setTimestamp();
  queue.metadata.message.channel.send({ embeds: [ts] }).then((sent) => {
    setTimeout(() => {
      sent.delete().catch((err) => {});
    }, track.duration);
  });
};