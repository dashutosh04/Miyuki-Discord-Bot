const { MessageEmbed } = require("discord.js");
const Random = require("srod-v2");
module.exports = {
  name: "wasted",
  aliases: ["wstd"],
  description: "Wastes you",
  category: "Image Generator",
  utilisation: "{prefix}wasted",

  async execute(client, message, args) {
    let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }

    let hug = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("WASTED")
      .setTimestamp()
      .setImage(
        `https://some-random-api.ml/canvas/wasted?avatar=${user.displayAvatarURL(
          {
            dynamic: "true",
            size: 1024,
            format: "png",
          }
        )}`
      );
    await message.reply({ embeds: [hug] });
  },
};
