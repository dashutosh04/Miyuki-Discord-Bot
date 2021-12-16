const nek = require("nekos.life");
const neko = new nek();

module.exports = {
  name: "poke",
  aliases: [],
  description: "Pokes the mentioned user.",
  category: "Actions",
  utilisation: "{prefix}poke @mention_user",
  async execute(client, message, args) {
    let target = message.mentions.users.first();

    let user;
    if (!args[0]) return message.reply("Please mention a user or a name.");

    if (args[0].toLowerCase().trim() === "me")
      return message.reply(
        "You Poked yourself \nNext time mention someone else."
      );

    if (target) {
      if (target.username === message.author.username)
        return message.reply(
          "You Poked yourself \nNext time mention someone else."
        );
      user = target.username;
    } else {
      user = args[0];
    }

    let owo = await neko.sfw.poke();
    t = `${message.author.username} Pokes ${user}`;
    client.embed.actionembed(client, message, args, t, owo.url);
  },
};
