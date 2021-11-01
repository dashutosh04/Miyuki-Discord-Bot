const {MessageEmbed} = require('discord.js')

module.exports = (client, queue, track) => {
    const ts = new MessageEmbed()
        .setAuthor('MUSIC PLAYER','https://i.imgur.com/eTmFq2M.gif')
        .setColor('#7ED0DF')
        .setDescription(`${client.emotes.music} - **STARTING MUSIC** \n**Title** - ${track.title} \n **Requested By**:- ${queue.message.author.username} \n**Voice Channel**:- <#${queue.message.member.voice.channel.id}>`)
        .setThumbnail(`${track.thumbnail}`)
        .setImage('https://i.imgur.com/pOCJuO0.gif')

if(queue.tracks.length > 1){
        ts.setFooter(`There are ${queue.tracks.length} songs in the queue.`)
    }
        ts.setTimestamp()
    queue.message.channel.send({ embeds: [ts] }).then(sent => {
        setTimeout(() =>{
            sent.delete().catch(err => {})
        },track.duration)
    });

};