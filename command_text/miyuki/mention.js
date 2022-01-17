const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "mention",
  aliases: [],
  category: "",
  utilisation: "{prefix}help <command name>",

  async execute(client, message, args) {
    const Guild = await client.database_func.getGuild(client, message.guild.id);
    if (!Guild[0]) prefix = process.env.PREFIX;
    else prefix = Guild[0].prefix;

    const hp = new MessageEmbed()
      .setAuthor({
        name: "Miyuki",
        iconURL: `${client.user.displayAvatarURL({
          size: 2048,
          dynamic: true,
        })}`,
      })
      .setDescription(
        `<:Partner:852962850652946468> **Prefix for this server is** \`${prefix}\`\n:green_circle: **Ping**- \`${client.ws.ping}\``
      )
      .setColor("BLACK")
      .setFooter(
        `For help command use \`${prefix}help\``,
        `${message.user.avatarURL({ size: 2048, dynamic: true })}`
      );
    message.reply({ embeds: [hp] });
  },
};
