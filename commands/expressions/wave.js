const {MessageEmbed} = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: 'wave',
    aliases: [],
    description: "Fetches a GIF",
    category: 'Expressions',
    utilisation: '{prefix}blush',

async execute(client,message,args){
  fetch(`https://g.tenor.com/v1/random?key=${process.env.Tenor}&q=wave-anime&limit=50`)
  .then(res => res.json())
  .then(json =>
    client.embed.expressionembed(message,json.results[Math.floor(Math.random() * 49)].media[0].gif.url , " is Waving 🤭" ,"Wave Back at them")
  )
  .catch(function onError() {
    message.reply(':x: Failed to find a gif!');
    return;
      });
}

}