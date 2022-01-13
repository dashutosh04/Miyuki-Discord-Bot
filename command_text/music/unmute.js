module.exports = {
  name: "unmute",
  aliases: ["un", "unm", "unmu"],
  utilisation: "{prefix}unmute 105",
  category: "Music",
  async execute(client, message, args) {
    const Queue = client.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current)) return message.reply(":x: Nothing Playing Right now");
    const success = Queue.unmute(Number(args[0]) ?? undefined);
    if (success)return message.channel.send("Song was unmuted")
  },
};
