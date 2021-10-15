const {MessageEmbed} = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
    name: 'animesearch',
    aliases: ["as"],
    description: "Searches for an anime",
    category: 'Utility',
    utilisation: '{prefix}animeseach <name>',
execute: async (client, message, args) => {
const search = `${args}`;

if(!search) return message.reply('Please add a name for anime to search');

malScraper.getInfoFromName(search)
  .then((data) => {
      if(!data) return message.reply('No results found')
  const as = new MessageEmbed()
    .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor('RANDOM')
    .setDescription(`**Title** - ${data.englishTitle} \n **Type** - ${data.type} \n **Episodes** - ${data.episodes} \n **Rating** - ${data.rating} \n **Aired** - ${data.aired} \n **Score** - ${data.score} \n **Score Stats** - ${data.scoreStats} \n **Link** - ${data.url}`)
    message.reply({ embeds: [as] ,messageReferenceID: message.Id});;

  })
}
};