const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'panda',
    aliases: [],
    description: "Sends Panda's Image.",
    category: 'Animals',
    utilisation: '{prefix}Panda',
async execute(client,message){
     const res = await fetch('https://some-random-api.ml/img/panda');
        const img = (await res.json()).link;
        const embed = new MessageEmbed()
          .setTitle('🐼  Huff!!  🐼')
          .setImage(img)
          .setFooter(`Requested by:- ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
          message.reply({ embeds: [embed] }); 
    
}



}