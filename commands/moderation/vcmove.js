const { ID } = require("../../utils/config/executive.json")

module.exports = {
    name: 'vcmove',
    aliases: [],
    description: "",
    category: 'Mod',
    utilisation: '{prefix}vcmove',

execute: async(client, message, args) => {
    if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") && !ID .includes(message.author.id) ) return message.channel.send('Error Occured');
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        if(!member) return message.channel.send("Unable to find the mentioned user in this guild.")

        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if(!channel) return message.channel.send('Unable to Find the Channel please use the command correctly')
        if (!channel.type === "GUILD_VOICE") return message.channel.send("Unable to locate the voice channel. Make sure to mention a voice channel not a text channel!") 

        try {
            member.voice.setChannel(channel);
            message.channel.send("Success ✅ : Member Moved!")
        } 
        
        catch(error) {
            console.log(error);
            message.channel.send("Oops! An unknown error occured. Please try again later.")
        }

    }
}