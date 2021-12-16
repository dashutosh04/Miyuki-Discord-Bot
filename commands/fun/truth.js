const { MessageEmbed } = require("discord.js");
const r = require("miyuki-api");
module.exports = {
  name: "truth",
  aliases: ["t"],
  description: "",
  category: "Fun",
  utilisation: "{prefix}truth",
  execute(client, message, args) {
    const truth = r.truth();
    const Embed1 = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${client.config.emojis.question}${truth}`)
      .setFooter(`Truth`)
      .setTimestamp();
    message.channel.send({ embeds: [Embed1] });
  },
};
