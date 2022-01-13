const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "clear",
  aliases: ["clear"],
  description: "Clears the messages in chat ",
  category: "Utility",
  utilisation: "{prefix}clear",
  async execute(client, message, args) {
    if (!args[0]) return message.reply("Hey Dude, What you want to delete !");

    if (isNaN(args[0]))
      return message.reply(
        "So after a quick search, I found the value entered is not a real number. "
      );

    if (args[0] > 100)
      return message.reply("You can't remove more than 100 messages!");

    if (args[0] < 1)
      return message.reply(
        "So let me think how i am supposed to clear this amount of message 🤔"
      );
    if (!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES"))
      return message.reply(`You Don't have permission to delete messages..`);

    await message.channel.messages.fetch({ limit: args[0] }).then((msg) => {
      message.channel.bulkDelete(msg).catch((err) => {
        const av = new MessageEmbed();

        av.setAuthor({ name: `${message.author.tag}` });
        av.setTitle(`API ERROR`);
        av.setDescription("An error occurred while deleting the messages.");
        av.setColor("#000000");
        av.setImage();
        av.setTimestamp();
        message.reply({ embeds: [av] });
      });
    });
  },
};
