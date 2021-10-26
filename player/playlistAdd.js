const {MessageEmbed} = require('discord.js')
module.exports = (client, queue, track) => {
     queue.message.channel.send('Playlist Added to the queue.'); 
};