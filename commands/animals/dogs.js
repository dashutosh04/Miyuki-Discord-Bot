const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'dogs',
    aliases: [],
    description: "Sends a dogs image.",
    category: 'Animals',
    utilisation: '{prefix}dogs',
async execute(client,message){
     const res = await fetch('https://some-random-api.ml/img/dog');
        const img = (await res.json()).link;
        const embed = new MessageEmbed()
          .setTitle('🐶  Ruff!!  🐶')
          .setImage(img)
          .setFooter(`Requested by:- ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
          message.reply({ embeds: [embed] ,messageReferenceID: message.Id}); 
    
}



}