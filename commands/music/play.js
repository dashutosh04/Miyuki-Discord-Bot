const {Extractor} = require('playdl-music-extractor')
const {MessageEmbed} = require('discord.js')
  const {
  createAudioResource,
  entersState,
  joinVoiceChannel,
  AudioPlayerStatus,
  getVoiceConnection,
  VoiceConnectionStatus,
  } = require('@discordjs/voice')

module.exports = {
    name: 'play',
    aliases: ["p"],
    description: "Plays music",
    category: 'Music',
    utilisation: '{prefix}play <name>',

async execute(client,message,args) {

  const ActiveConnection = getVoiceConnection(message.guild.id);
  const channel = message.member.voice.channel;
  const error = (err) => message.channel.send(err);
  const setqueue = (id, obj) => message.client.queue.set(id, obj);
  const deletequeue = (id) => message.client.queue.delete(id);
  var song;
  

  if (!channel) return error("You must join a voice channel to play music!");

  if (!channel.permissionsFor(message.client.user).has("CONNECT")) return error("I don't have permission to join the voice channel");
  
  if(ActiveConnection && channel.id !== message.guild.me.voice.channel.id) return message.reply(":x: | **You must be in the same voice channel as me to use this command!**");

  if (!channel.permissionsFor(message.client.user).has("SPEAK")) return error("I don't have permission to speak in the voice channel");

  const SearchQuery = args.join(" ");

  if (!SearchQuery) return error("You didn't provide a song name to play!");
  
  try{
  var Tracks = await Extractor(SearchQuery,{
    Limit: 1,
    Quality: 'highest',
  })
} catch(e){
  return error("No song found for the url provided")
}

if (!Tracks || (Tracks && !Tracks.tracks) || (Tracks && Tracks.tracks && !Tracks.tracks[0])) return error("No song found for the url provided");
    song = {
      name: Tracks.tracks[0].title,
      thumbnail: Tracks.tracks[0].thumbnail,
      requested: message.author,  
      duration: Tracks.tracks[0].duration,
      url: Tracks.tracks[0].url,
      track: Tracks
    };
  var list = message.client.queue.get(message.guild.id);

  if (list) {
    list.queue.push(song);

    return message.channel.send(`**Title** - \`${song.name}\` \n **Requested By**:- ${song.requested} \nAdded to the queue`);
  }
  const structure = {
    channel: message.channel,
    vc: channel,
    volume: null,
    playing: true,
    queue: [],
    connection: null,
  };
  
  setqueue(message.guild.id,structure);
  structure.queue.push(song);

 
    const connection = joinVoiceChannel({
      channelId: message.member.voice.channelId,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator,
      })
      structure.connection = connection;
      play(structure.queue[0].track)
      entersState(client.player, AudioPlayerStatus.Playing, 5e3)
      connection.subscribe(client.player)

    
  async function play(Res) {
    try {
      const data = message.client.queue.get(message.guild.id);
      if (!Res) {
        message.reply("Queue is empty, Leaving voice channel");
        return deletequeue(message.guild.id);
        }
          client.player.on(AudioPlayerStatus.AutoPaused, () => deletequeue(message.guild.id));
          const source = createAudioResource(Res.tracks[0].stream,
            {
            metadata: null,
            inlineVolume: true,
            inputType: Res.tracks[0].stream_type
          });
          

          client.player.play(source)
          source.volume.setVolume(structure.volume/100)
          client.player.on(AudioPlayerStatus.Idle, () => {
              var removed = data.queue.shift();
              if(data.loop == true){
                data.queue.push(removed)
              }
              if(!structure.queue[0]) return message.channel.send('ENDED')
              play(structure.queue[0].track);
            });
        } catch (e) {
          console.error(e);
        }
      }

      try {
        await entersState(connection, VoiceConnectionStatus.Ready, 30e3)
      } catch (error) {
          connection.destroy()
          throw error
        };
       



      
      let hug = new MessageEmbed()
      .setAuthor('Music Player','https://media.discordapp.net/attachments/848919105814003752/898067685185847326/load.gif')
      .setURL(song.url)
      .setThumbnail(song.thumbnail)
      .setDescription(`<a:ArkLoading:852962682486390874> **STARTING MUSIC** \n**Title** - \`${song.name}\` \n **Requested By**:- ${song.requested} \n**Voice Channel**:- <#${message.member.voice.channel.id}>`)
      .setFooter(`Requested by:- ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('RANDOM');
      await message.reply({ embeds: [hug] ,messageReferenceID: message.Id});

      
    }
    
}

