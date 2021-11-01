const meme = require('nekos.life');
const neko = new meme();


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
  t= `${message.author.username} Tickles ${user}`
    client.embed.actionembed(client,message,args,t,owo.url)
}
};