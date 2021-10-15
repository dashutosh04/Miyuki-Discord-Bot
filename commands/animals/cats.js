const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'cats',
    aliases: [],
    description: "Sends a cats image.",
    category: 'Animals',
    utilisation: '{prefix}cats',
async execute(client,message){
     const res = await fetch('http://shibe.online/api/cats');
        const img = (await res.json())[0];
        const embed = new MessageEmbed()
          .setTitle('🐈  Meow!  🐈')
          .setImage(img)
          .setFooter(`Requested by:- ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
          message.reply({ embeds: [embed] ,messageReferenceID: message.Id}); 
    
}



}