const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "mention",
  aliases: [],
  category: "",
  utilisation: "{prefix}help <command name>",

  async execute(client, message, args) {
    let prefix = process.env.PREFIX;

    const hp = new MessageEmbed()
      .setAuthor({name:
        "Miyuki",url:
        `${client.user.displayAvatarURL({ size: 2048, dynamic: true })}`
      })
      .setDescription(
        `<:Partner:852962850652946468> **Prefix for this server is** \`${prefix}\`\n:green_circle: **Ping**- \`${client.ws.ping}\``
      )
      .setColor("BLACK")
      .setFooter(
        `For help command use \`${prefix}help\``,
        `${message.author.displayAvatarURL({ size: 2048, dynamic: true })}`
      );
    message.channel.send({ embeds: [hp] });
  },
};
