const {MessageEmbed} = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: 'shrug',
    aliases: [],
    description: "Fetches a GIF",
    category: 'Image Generator',
    utilisation: '{prefix}blush',

async execute(client,message,args){
  fetch(`https://g.tenor.com/v1/random?key=${process.env.Tenor}&q=shrug-anime&limit=50`)
  .then(res => res.json())
  .then(json =>
    message.reply(json.results[Math.floor(Math.random() * 49)].url)
  )
  .catch(function onError() {
    message.reply(':x: Failed to find a gif!');
    return;
      });
}

}