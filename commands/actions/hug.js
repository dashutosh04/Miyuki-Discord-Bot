const meme = require('nekos.life');
const neko = new meme();
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'hug',
    aliases: [],
    description: "Hugs the mentioned user or name.",
    category: 'Actions',
    utilisation: '{prefix}hug @mention_user',

execute: async (client, message, args) => {

    let target = message.mentions.users.first()

    let user;
    if(!args[0]) return message.reply('Please mention a user or a name.')

    if(args[0].toLowerCase().trim() === 'me') return message.reply('Umm is there no one to hug you. :pleading_face:')

    if(args[0].toLowerCase().trim() === 'him') return message.reply('I will hug him. 😜 \nNext time mention that user.')

    if(args[0].toLowerCase().trim() === 'her') return message.reply('Why you want to hug her, hug me instead :point_right::point_left: \nNext time mention that user.')
    
    if(target){
        if(target.username === message.author.username) return message.reply(`Umm is there no one to hug you. :pleading_face:`)
        user = target.username;

    }else {
        user = args[0] ;
    }

    let tag = ["Cute!!","Lewd!","UwU"]
    let rtag = Math.floor(Math.random() * tag.length);
    let owo = await neko.sfw.hug();
    let hug = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} Hugs ${user} ${tag[rtag]} `)
    .setTimestamp()
    .setImage(owo.url)
    message.reply({ embeds: [hug] });  
}
};