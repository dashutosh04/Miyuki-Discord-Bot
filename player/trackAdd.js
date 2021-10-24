const {MessageEmbed} = require('discord.js')
module.exports = (client, queue, track) => {

    const ta = new MessageEmbed()
        .setAuthor('QUEUE MANAGER','https://i.imgur.com/eTmFq2M.gif')
        .setColor('#7ED0DF')
        .setDescription(`${client.emotes.music} - **__ADDED TO QUEUE__** \n**Title** - ${track.title} \n **Requested By**:- baad mei`)
        .setThumbnail(`${track.thumbnail}`)
        .setImage(`https://i.imgur.com/pZQwzwz.gif`)
        .setTimestamp()
        queue.message.reply({ embeds: [ta]}); 


};