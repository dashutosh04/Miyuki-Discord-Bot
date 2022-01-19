const { MessageEmbed } = require("discord.js");
const Random = require("srod-v2");
module.exports = {
  name: "Gay",
  aliases: ["gay"],
  description: "gays you",
  category: "Image Generator",
  utilisation: "{prefix}gay",

  async execute(client, message, args) {
    let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }
    let avatar = user.displayAvatarURL({
      dynamic: "true",
      size: 1024,
      format: "png",
    });
    const Image = encodeURI(avatar);
    let hug = new MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setImage(`https://some-random-api.ml/canvas/gay?avatar=${Image}`);
    await message.reply({ embeds: [hug] });
  },
};
