const meme = require('nekos.life');
const neko = new meme();
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'tickle',
    aliases: [],
    description: "Posts a tickle",
    category: 'Actions',
    utilisation: '{prefix}tickle',
execute: async (client, message, args) => {
    let target = message.mentions.users.first()
    let user;

    if(target) {
        user = target.username;

    }else {
        user = message.author.username;
    }
  let owo = await neko.sfw.tickle();
  let hug = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} Tickles ${user}`)
    .setTimestamp()
    .setImage(owo.url)
    message.reply({ embeds: [hug] }); 
}
};