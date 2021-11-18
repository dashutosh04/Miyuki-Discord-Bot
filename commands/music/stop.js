module.exports = {
    name: 'stop',
    aliases: [],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
  async execute(client, message, args) {
        const Queue = client.player.GetQueue(message.guild.id);
        const channel = message.member.voice.channel;
        
        
        if(!Queue) return message.channel.send('I am not in a voice channel.')
        if (!channel) return message.channel.send("You must Join a voice channel before using this command!");
        const success = Queue.stop();
      },
    }