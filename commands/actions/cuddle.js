const nek = require('nekos.life');
const neko = new nek();
module.exports = {
    name: 'cuddle',
    aliases: [],
    description: "Cuddles the mentioned user.",
    category: 'Actions',
    utilisation: '{prefix}Cuddle @mention_user',

async execute(client, message, args){

    let target = message.mentions.users.first()

    let user;
    if(!args[0]) return message.reply('Please mention a user or a name.')

    if(args[0].toLowerCase().trim() === 'me') return message.reply('Umm is there no one to cuddle you. :pleading_face:')

    if(args[0].toLowerCase().trim() === 'him') return message.reply('I will cuddle him. 😜 \nNext time mention that user.')

    if(args[0].toLowerCase().trim() === 'her') return message.reply('Why you want to cuddle her, hug me instead :point_right::point_left: \nNext time mention that user.')
    
    if(target){
        if(target.username === message.author.username) return message.reply(`Umm is there no one to cuddle you. :pleading_face:`)
        user = target.username;

    }else {
        user = args.join(" ") ;
    }
    let tag = ["Cute!!","Lewd!","UwU"]
    let rtag = Math.floor(Math.random() * tag.length);
    let owo = await neko.sfw.cuddle();
    t= `${message.author.username} cuddles ${user} ${tag[rtag]}`
    client.embed.actionembed(client,message,args,t,owo.url)

}
};