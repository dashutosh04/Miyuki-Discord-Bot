module.exports = {
  name: "play",
  aliases: ["p", "pl"],
  utilisation: '{prefix}play "Despacito"',
  category: "Music",
  async execute(client, message, args) {
    if (!args[0]) return message.channel.send("Please provide a song name");
    const channel = message.member.voice.channel;
    if (!channel)
      return message.channel.send(
        "You must Join a voice channel before using this command!"
      );
    await message.channel
      .send(`Searching for requested songs ${client.emotes.typing} `)
      .then((sent) => {
        setTimeout(async () => {
          await sent.delete().catch((err) => {});
        }, 10000);
      });
    const Queue =
      client.player.GetQueue(message.guild.id) ??
      client.player.CreateQueue(message, {
        NoMemoryLeakMode: true,
        metadata: { message: message },
      });
    await Queue.play(args.join(), message.member.voice.channel, message.author);
    await message.delete().catch((err) => {});
  },
};
