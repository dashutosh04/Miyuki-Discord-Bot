const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'fox',
    aliases: [],
    description: "Sends Fox's Image.",
    category: 'Animals',
    utilisation: '{prefix}Fox',
async execute(client,message){
     const res = await fetch('https://some-random-api.ml/img/fox');
        const img = (await res.json()).link;
        const embed = new MessageEmbed()
          .setTitle('🦊  Huff!!  🦊')
          .setImage(img)
          .setFooter(`Requested by:- ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
          message.reply({ embeds: [embed] ,messageReferenceID: message.Id}); 
    
}



}