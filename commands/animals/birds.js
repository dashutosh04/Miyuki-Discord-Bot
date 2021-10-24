const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'bird',
    aliases: [],
    description: "Sends a bird image.",
    category: 'Animals',
    utilisation: '{prefix}bird',
async execute(client,message){
     const res = await fetch('http://shibe.online/api/birds');
        const img = (await res.json())[0];
        const embed = new MessageEmbed()
          .setTitle('🐦  Chirp!  🐦')
          .setImage(img)
          .setFooter(`Requested by:- ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
          message.reply({ embeds: [embed] }); 
    
}



}