const { MessageActionRow, MessageButton } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite Me ✨"),
  async execute(client, message) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Me ✨")
        .setStyle("LINK")
        .setURL("https://dsc.gg/miyukibot")
    );

    await message.reply({
      content:
        "<a:yayyyy:858000597844492339> **Invite Miyuki to your server by clicking the link below**",
      components: [row],
    });
  },
};
