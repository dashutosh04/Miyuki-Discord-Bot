const { MessageEmbed, ActivityFlags } = require("discord.js");
module.exports = {
  name: "avatar",
  aliases: ["av"],
  description: "Shows the avatar of the user",
  category: "Utility",
  utilisation: "{prefix}help <command name>",
  execute(client, message, args) {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }
    let avatar = user.displayAvatarURL({ size: 2048, dynamic: true });

    const av = new MessageEmbed()
      .setAuthor({ name: `${message.author.tag}` })
      .setColor("#000000")
      .setImage(avatar)
      .setDescription(`Avatar, looks cool 😄`)
      .setTimestamp();
    return message.reply({ embeds: [av] });
  },
};
