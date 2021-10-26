const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    aliases: ['speed','latency'],
    utilisation: '{prefix}ping',
    category: 'Utility',

execute(client,message){ 
            const Embed1 = new MessageEmbed()
            .setColor('#53ff1a')
            .setURL()
            .setThumbnail()
            .setDescription(`:heart: \`${Math.floor(client.ws.ping/10)}ms\``)
            message.channel.send({ embeds: [Embed1] });
            
 }
    
}
