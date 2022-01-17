const { MessageEmbed } = require("discord.js");
const { ID } = require("../../utils/config/executive.json");
module.exports = {
  name: "steal",
  aliases: [],
  description: "Sets Your nickname",
  category: "Utility",
  utilisation: "{prefix}nickname  <name>",
  async execute(client, message, args) {
    if (
      !message.channel.permissionsFor(message.member).has("MANAGE_EMOJIS") &&
      !ID.includes(message.author.id)
    )
      return message.reply("You don't have `MANAGE_EMOJIS` permission to add the emoji to this server'");
    var emoji;

    if (!args[0]) return message.reply("Please enter a emoji name");

    if (!isNaN(args[0])) {
      emoji = client.emojis.cache.find((emoji) => emoji.id === args[0]);
    }

    if (args[0] && !emoji) {
      emoji = client.emojis.cache.find((emoji) => emoji.name === args[0]);
    }
    if (args[0].indexOf(":") !== -1 && !emoji) {
      var name = args[0].substring(
        args[0].replace(":", "").indexOf(":") + 2,
        args[0].lastIndexOf(">")
      );
      emoji = client.emojis.cache.find((emoji) => emoji.id === name);
    }
    if (args[0].indexOf(":") !== -1 && !emoji) {
      var name = args[0].substring(
        args[0].indexOf("<") + 2,
        args[0].lastIndexOf(":")
      );
      emoji = client.emojis.cache.find((emoji) => emoji.name === name);
    }

    if (!emoji)
      return message.reply(
        `> :x: **${message.author.username}** No Emojis Found :c`
      );
    const ext = emoji.animated ? ".gif" : ".png";
    var Emojilink = `https://cdn.discordapp.com/emojis/${emoji.id + ext}`;

    message.guild.emojis
      .create(Emojilink, emoji.name)
      .then((emoji) =>
        message.reply(`Added ${emoji} with the name \`${emoji.name}\``)
      )
      .catch((err) =>
        message.reply(`No Slots Left in the server to add that emoji`)
      );
  },
};
