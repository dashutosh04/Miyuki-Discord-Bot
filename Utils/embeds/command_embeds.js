const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
function actionembed(message, text, url) {
  let Action_embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({
      name: text,
      iconURL: `${message.author.displayAvatarURL({
        size: 2048,
        dynamic: true,
      })}`,
    })
    .setTimestamp()
    .setImage(url);
  message.reply({ embeds: [Action_embed] });
}
async function animals(client, message, args, res, name) {
  const img = (await res.json()).image;

  let Aembed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({
      name: `${name}`,
      iconURL: `${message.author.displayavatarURL({
        size: 2048,
        dynamic: true,
      })}`,
    })
    .setTimestamp()
    .setFooter({
      text: `Requested by:- ${message.member.displayName}`,
      iconURL: message.author.displayavatarURL({ dynamic: true }),
    })
    .setImage(img);
  message.reply({ embeds: [Aembed] });
}
function expressionembed(message, img, title, footer) {
  const embed = new MessageEmbed()
    .setTitle(`${message.member.displayName}` + title)
    .setImage(img)
    .setFooter(footer, message.author.displayavatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor("RANDOM");
  message.reply({ embeds: [embed] });
}
module.exports = { actionembed, animals, expressionembed };
