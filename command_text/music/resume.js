module.exports = {
  name: "resume",
  aliases: [],
  description: "Join your vc",
  category: "Music",
  utilisation: "{prefix}resume",
  async execute(client, message, args) {
    const queue = client.player.GetQueue(message.guild.id);
    if (!queue) return message.reply(":x: Nothing Playing Right now");
    queue.resume();
    message.delete().catch((err) => {});
  },
};