const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    aliases: ['speed','latency'],
    utilisation: '{prefix}ping',
    category: 'Utility',

    execute(client,message,args,){


        message.channel.send(`Loading data ......`)
        .then (async (msg) =>{
            let Embedm = {
                      title: 'Pinging... <a:developer:809057607963639868> ',
                      des : ` :hourglass: ${msg.createdTimestamp - message.createdTimestamp}ms .\n :heart: ${client.ws.ping}ms. `
            }
            msg.delete();
            
            const Embed1 = new MessageEmbed()
            .setColor('#53ff1a')
            .setTitle(`${Embedm.title}`)
            .setURL()
            .setThumbnail()
            .setDescription(`${Embedm.des}`)
            .setTimestamp();
        
            message.reply({ embeds: [Embed1] });
            
          })
    
    }
}