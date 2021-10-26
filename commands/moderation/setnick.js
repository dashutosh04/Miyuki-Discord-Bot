const { ID } = require("../../config/executive.json")
module.exports = {
    name: 'setnick',
    aliases: ["nick"],
    description: "Sets Your nickname",
    category: 'Mod',
    utilisation: '{prefix}nickname  <name>',
execute(client, message, args){
        if(!message.channel.permissionsFor(message.member).has("MANAGE_GUILD") && !ID .includes(message.author.id) ) return message.channel.send("**You Dont Have Permissions To Change Nickname! - [MANAGE_GUILD]**");
      
        if (!args[0]) return message.channel.send("**Please Enter A User!**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.channel.send("**Please Enter A Username!**");
        if(member.id === message.guild.ownerId) return message.channel.send("**Owner's nickname can't be changed!**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Set or Change Nickname Of This User!**')

        if (!args[1]) return message.channel.send("**Please Enter A Nickname**");

        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        message.reply(`Nickname Changed`);
        } catch {
            return message.channel.send("**Missing Permissions - [CHANGE_NICKNAME]")
        }
    }
}