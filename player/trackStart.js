const {MessageEmbed} = require('discord.js')

module.exports = (client, queue, track) => {
    const ts = new MessageEmbed()
        .setAuthor('MUSIC PLAYER','https://i.imgur.com/eTmFq2M.gif')
        .setColor('#7ED0DF')
        .setDescription(`${client.emotes.music} - **__STARTING MUSIC__** \n**Title** - ${track.title} \n **Requested By**:- ${queue.message.author.username} \n**Voice Channel**:- <#${queue.message.member.voice.channel.id}>`)
        .setThumbnail(`${track.thumbnail}`)
        .setImage('https://i.imgur.com/pOCJuO0.gif')
        .setTimestamp()
    queue.message.reply({ embeds: [ts] }).then(sent => {
        setTimeout(() =>{
            sent.delete()
        },10000)
    });

};