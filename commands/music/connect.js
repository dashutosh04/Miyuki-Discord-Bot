const {joinVoiceChannel,} = require('@discordjs/voice')
module.exports = {
    name: 'join',
    aliases: [],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
execute(client,message,args) {
  const channel = message.member.voice.channel;

  if (!channel)
    return message.channel.send(`${client.emotes.error} **||** You must Join a voice channel before using this command!`);
  if (!channel.permissionsFor(message.client.user).has("CONNECT"))
    return error("I don't have permission to join the voice channel");
  if (!channel.permissionsFor(message.client.user).has("SPEAK"))
    return error("I don't have permission to speak in the voice channel");


  joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator
  })
    
}
}

