const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder().setName("koala").setDescription("🐨🐨"),
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animal/koala");
    const name = `🐼 Ruff 🐼`;
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
      .setTimestamp()
      .setFooter({
        text: `Requested by:- ${message.member.displayName}`,
        iconURL: message.user.avatarURL({ dynamic: true }),
      })
      .setImage(img);
    message.reply({ embeds: [Aembed] });
  },
};
