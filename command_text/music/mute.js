module.exports = {
  name: "mute",
  aliases: ["mu"],
  utilisation: "{prefix}mute",
  category: "Music",
  async execute(client, message, args) {
    const Queue = client.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current))
      return message.reply(":x: Nothing Playing Right now");
    const success = Queue.mute();
    if (success) return message.channel.send("Song was muted")
  },
};
