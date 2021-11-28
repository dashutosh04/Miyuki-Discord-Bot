const {MessageEmbed} = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: 'smile',
    aliases: [],
    description: "Fetches a GIF",
    category: 'Expressions',
    utilisation: '{prefix}blush',

async execute(client,message,args){
  fetch(`https://g.tenor.com/v1/random?key=${process.env.Tenor}&q=smile-anime&limit=50`)
  .then(res => res.json())
  .then(json =>
    client.embed.expressionembed(message,json.results[Math.floor(Math.random() * 49)].media[0].gif.url , " is Smiling 😁" ,"Looks Cute")
  )
  .catch(function onError() {
    message.reply(':x: Failed to find a gif!');
    return;
      });
}

}