const { MessageActionRow, MessageButton } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder().setName("vote").setDescription("Vote Me ✨"),
  async execute(client, interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Vote Me ✨")
        .setStyle("LINK")
        .setURL("https://top.gg/bot/731431395745988649/vote")
    );

    await interaction.reply({
      content:
        "<a:yayyyy:858000597844492339> **Vote Miyuki on Top.gg by clicking the link below..**",
      components: [row],
    });
  },
};
