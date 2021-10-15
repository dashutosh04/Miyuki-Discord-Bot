const { Extractor } = require('video-extractor')
const {
    createAudioResource,
    getVoiceConnection,
    createAudioPlayer,
    entersState,
    joinVoiceChannel,
    AudioPlayerStatus,
    VoiceConnectionStatus,
  } = require('@discordjs/voice')
const player = createAudioPlayer()

module.exports = {
    name: 'leave',
    aliases: [],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
async execute(client,message,args) {
  const channel = message.member.voice.channel;
  const connection = getVoiceConnection(message.guild.id);
  if(!connection) return message.channel.send('I am not in a voice channel.')
  if (!channel) return message.channel.send("You must Join a voice channel before using this command!");

  if(!message.guild.me.voice.channel.id) return message.reply('I am not a voice channel.')

  if(message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(":x: | **You must be in the same voice channel as me to use this command!**");

    connection.destroy();
      if(!connection) return message.reply('Error')
      await message.reply(':x: Left your VC')
    }
    
}

