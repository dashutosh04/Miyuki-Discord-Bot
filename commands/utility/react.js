const { MessageEmbed } = require("discord.js");
const { ID } = require("../../utils/config/executive.json");
module.exports = {
  name: "react",
  aliases: ["r"],
  description: "Sets Your nickname",
  category: "Utility",
  utilisation: "{prefix}nickname  <name>",
  async execute(client, message, args) {
    if (
      !message.channel.permissionsFor(message.member).has("ADMINISTRATOR") &&
      !ID.includes(message.author.id)
    )
      return message.channel.send("Error Occured");
    var emoji;
    if (!args[0]) return message.channel.send("Please enter a emoji name");

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
      return message.channel.send(
        `> :x: **${message.author.username}** No Emojis Found :c`
      );
    await message.delete().catch((err) => {
      err;
    });
    client.channels.cache
      .get(message.channel.id)
      .messages.fetch({ limit: 2 })
      .then((messages) => {
        var lastMessage = messages.first();
        lastMessage.react(emoji.then());
      });
    const BotReactions = message.reactions.cache.filter((reaction) =>
      reaction.users.cache.has("914092958800838728")
    );

    try {
      for (const reaction of BotReactions.values()) {
        console.log(reaction);
        await reaction.users.remove(client.user.id);
      }
    } catch (error) {
      console.error("Failed to remove reactions.");
    }
  },
};
