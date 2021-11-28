const nek = require('nekos.life');
const neko = new nek();


module.exports = {
    name: 'slap',
    aliases: ['hit'],
    description: "Slaps the mentioned user.",
    category: 'Actions',
    utilisation: '{prefix}slap',
async execute(client, message, args){
    let target = message.mentions.users.first()
    let user;

    if(target) {
        user = target.username;

    }else {
        user = message.author.username;
    }
  let owo = await neko.sfw.slap();
  t= `${message.author.username} Slaps ${user}`
    client.embed.actionembed(client,message,args,t,owo.url)
}
};