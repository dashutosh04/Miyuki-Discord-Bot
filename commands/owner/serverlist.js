const {MessageEmbed} = require('discord.js')
const ReactionMenu = require('../../utils/resources/pager.js');
const { ID } = require("../../utils/config/executive.json")
module.exports = {
    name: 'serverlist',
    aliases: ["guildlist"],
    description: "Gives an answer from the 8-ball",
    category: 'Text Generator',
    utilisation: '{prefix}8ball',
async execute(client,message,args) {
  if(!ID .includes(message.author.id) ) return message.channel.send('Only the Executives can use this command');
  var uff = []
  await client.guilds.cache.forEach((guild) => {
    uff.push(`\`${guild.id}\` - **${guild.name}** - \`${guild.memberCount}\` members`)
  })
  const embed = new MessageEmbed()
  .setTitle('Server List')
  .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setDescription(uff.join(`\n`))
  .setColor(message.guild.me.displayHexColor);
  

  if (uff.length <= 10) {;
    message.channel.send({ embeds: [embed]});
  } else {
    new ReactionMenu(client, message.channel, message.member, embed, uff);
  }
}
}
