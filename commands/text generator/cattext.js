const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
    name: 'cattext',
    aliases: ["ct"],
    description: "Sends an anime waifu text.",
    category: 'Text Generator',
    utilisation: '{prefix}cattext',
execute: async (client, message, args) => {
     async function work() {

        let owo = (await neko.sfw.catText());
        message.channel.send(owo.cat).catch(error => {
            console.error(error);
        });

      }

      work();
  }
  };