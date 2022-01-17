const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  category: "Utility",
  utilisation: "{prefix}invite",
  async execute(client, message) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Primary")
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
