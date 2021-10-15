const { ID } = require("../../config/executive.json")
module.exports = {
    name: 'slowmode',
    aliases: [],
    description: "",
    category: 'Mod',
    utilisation: '{prefix}slowmode',
execute: async (bot, message, args) => {
    if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") && !ID .includes(message.author.id) ) return
  
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
      
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    
    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(
      `Set the slowmode of this channel to **${args[0]}**`
    );
  },
};