const {
    createAudioResource,
    createAudioPlayer,
    entersState,
    joinVoiceChannel,
    AudioPlayerStatus,
    VoiceConnectionStatus,
  } = require('@discordjs/voice')


module.exports = {
    name: 'volume',
    aliases: [],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
async execute(client,message,args) {
    const channel = message.member.voice.channel;
    if (!channel)
      return message.channel.send(
        "You must Join a voice channel before using this command!"
      );
  
    const queue = message.client.queue.get(message.guild.id);
  console.log(queue)
    if (!args[0])
      return message.channel.send(
        new MessageEmbed()
          .setAuthor(
            "Master Volume Controller",
            "https://img.icons8.com/color/2x/high-volume--v2.gif"
          )
          .setColor("BLUE")
          .setDescription("**Current volume is " + queue.volume + " **")
      );
  
    if (args[0] > 100)
      return message.channel.send(
        new MessageEmbed()
          .setAuthor(
            "Master Volume Error",
            "https://img.icons8.com/color/2x/high-volume--v2.gif"
          )
          .setColor("RED")
          .setDescription("**Volume cannot exceed 100 :x: **")
      );

    queue.structure.volume = args[0];















}
}