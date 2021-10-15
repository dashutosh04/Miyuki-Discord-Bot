const meme = require('nekos.life');
const neko = new meme();
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'slap',
    aliases: ['hit'],
    description: "Slaps the mentioned user.",
    category: 'Actions',
    utilisation: '{prefix}slap',
execute: async (client, message, args) => {
    let target = message.mentions.users.first()
    let user;

    if(target) {
        user = target.username;

    }else {
        user = message.author.username;
    }
  let owo = await neko.sfw.slap();
  let hug = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} slaps ${user}`)
    .setTimestamp()
    .setImage(owo.url)
    message.reply({ embeds: [hug] ,messageReferenceID: message.Id}); 
}
};