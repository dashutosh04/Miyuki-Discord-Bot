const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "wink",
  aliases: [],
  description: "Sends a winking Image.",
  category: "Emotes",
  utilisation: "{prefix}wink",
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animu/wink");
    const img = (await res.json()).link;
    const embed = new MessageEmbed()
      .setTitle(`${message.member.displayName} Winks`)
      .setImage(img)
      .setFooter(`Ohoo`, message.user.avatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.reply({ embeds: [embed] });
  },
};
