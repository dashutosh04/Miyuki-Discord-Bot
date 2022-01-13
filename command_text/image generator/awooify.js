const { MessageEmbed } = require("discord.js");
const Miyuki = require("miyuki-api");
module.exports = {
  name: "Awooify",
  aliases: ["aw"],
  description: "Awooifies your user's avatar",
  category: "Image Generator",
  utilisation: "{prefix}awooify",

  async execute(client, message, args) {
    let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (!isNaN(args[0])) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }
    let avatar = user.displayAvatarURL({
      dynamic: "true",
      size: 1024,
      format: "png",
    });

    const image = await Miyuki.Awooify(avatar);

    let hug = new MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setImage(image);
    message.reply({ embeds: [hug] });
  },
};
