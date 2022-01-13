const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder().setName("dog").setDescription("🐶🐕🐕‍🦺🐩"),
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animal/dog");
    const name = "🐶  Ruff!!  🐶";
    const img = (await res.json()).image;

    let Aembed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor({
        name: `${name}`,
        iconURL: `${message.user.avatarURL({
          size: 2048,
          dynamic: true,
        })}`,
      })
      .setFooter({
        text: `Requested by:- ${message.member.displayName}`,
        iconURL: message.user.avatarURL({ dynamic: true }),
      })
      .setTimestamp()

      .setImage(img);
    message.reply({ embeds: [Aembed] });
  },
};
