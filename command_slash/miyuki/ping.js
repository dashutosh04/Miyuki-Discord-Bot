const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong ✨⏱️"),
  async execute(client, message) {
    const Embed1 = new MessageEmbed()
      .setColor("#53ff1a")
      .setURL()
      .setThumbnail()
      .setDescription(`:heart: \`${Math.floor(client.ws.ping)}ms\``);
    message.reply({ embeds: [Embed1] });
  },
};
