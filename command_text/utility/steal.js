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
      !message.channel.permissionsFor(message.member).has("ADMINISTRATOR") &&
      !ID.includes(message.author.id)
    )
      return message.reply("Error Occured");
    var emoji;
    var emoji_regex =
      /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])$/;

    function emojiUnicode(emoji) {
      var comp;
      if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
      }
      comp =
        (emoji.charCodeAt(0) - 0xd800) * 0x400 +
        (emoji.charCodeAt(1) - 0xdc00) +
        0x10000;
      if (comp < 0) {
        comp = emoji.charCodeAt(0);
      }
      return comp.toString("16");
    }
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
