const meme = require('nekos.life');
const neko = new meme();
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'kiss',
    aliases: ['umma'],
    description: "Kisses the mentioned user.",
    category: 'Actions',
    utilisation: '{prefix}kiss @mention_user',
execute: async (client, message, args) => {

    let owo = await neko.sfw.kiss().catch(err => {
        console.log(err)
    });
    
    let target = message.mentions.users.first()
    let user;

    if(!args[0]) return message.reply('Please mention a user to hug.')

    if(args[0].toLowerCase().trim() === 'me') return message.reply('Du.. do you want me to kiss you 👀.')

    if(args[0].toLowerCase().trim() === 'him') return message.reply('I will kiss him. 😜 \nNext time ping him.')

    if(args[0].toLowerCase().trim() === 'her') return message.reply('Why you want to kiss her, kiss me instead :point_right::point_left: \nNext time ping her.')

    if(target){
        if(target.username === message.author.username) return message.reply('Du.. do you want me to kiss you 👀.')
            user = target.username;

    }else{
        user = args[0] ;
    }
    




    let tag = ["Cute!!","Lewd!","UwU"]
    let rtag = Math.floor(Math.random() * tag.length);
    let hug = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(`${message.author.username} Kisses ${user} ${tag[rtag]} `)
    .setTimestamp()
    .setImage(owo.url)
    message.reply({ embeds: [hug] ,messageReferenceID: message.Id});  
}
};