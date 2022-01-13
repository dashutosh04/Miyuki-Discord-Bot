module.exports = {
  name: "pause",
  aliases: [],
  description: "Join your vc",
  category: "Music",
  utilisation: "{prefix}Join",
  async execute(client, message, args) {
    const queue = client.player.GetQueue(message.guild.id);
    if (!queue) return message.reply(":x: Nothing Playing Right now");
    queue.pause();
    message.delete().catch((err) => {});
  },
};