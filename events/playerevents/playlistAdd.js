const {MessageEmbed} = require('discord.js')
module.exports = (client, queue, track) => {
     queue.message.channel.send(`${client.emotes.queue} **|** Playlist was successfully added to the queue.`); 
};