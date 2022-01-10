const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
function actionembed(message, text, url) {
  let Action_embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({
      name: text,
      url: `${message.author.displayAvatarURL({ size: 2048, dynamic: true })}`,
    })
    .setTimestamp()
    .setImage(url);
  message.channel.send({ embeds: [Action_embed] });
}
async function animals(client, message, args, res, name) {
  const img = (await res.json()).image;
  console.log(res);
  let Aembed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({
      name: `${name}`,
      url: `${message.author.displayAvatarURL({ size: 2048, dynamic: true })}`,
    })
    .setTimestamp()
    .setFooter({
      name: `Requested by:- ${message.member.displayName}`,
      url: message.author.displayAvatarURL({ dynamic: true }),
    })
    .setImage(img);
  message.channel.send({ embeds: [Aembed] });
}
function expressionembed(message, img, title, footer) {
  const embed = new MessageEmbed()
    .setTitle(`${message.member.displayName}` + title)
    .setImage(img)
    .setFooter(footer, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor("RANDOM");
  message.reply({ embeds: [embed] });
}
module.exports = { actionembed, animals, expressionembed };
