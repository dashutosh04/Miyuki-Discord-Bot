const meme = require('nekos.life');
const neko = new meme();
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'pat',
    aliases: [],
    description: "Posts a pat",
    category: 'Actions',
    utilisation: '{prefix}pat @mention_user',

execute: async (client, message, args) => {

    let target = message.mentions.users.first()

    let user;
    if(!args[0]) return message.reply('Please mention a user or a name.')

    if(args[0].toLowerCase().trim() === 'me') return message.reply('Umm is there no one to pat you. :pleading_face:')

    if(target){
        if(target.username === message.author.username) return message.reply(`Umm is there no one to pat you. :pleading_face:`)
        user = target.username;

    }else {
        user = args[0] ;
    }

  let owo = await neko.sfw.pat();
  let hug = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} Pats ${user}`)
    .setTimestamp()
    .setImage(owo.url)
    message.reply({ embeds: [hug] });
}
};