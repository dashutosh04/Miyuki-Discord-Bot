const nek = require("nekos.life");
const neko = new nek();

module.exports = {
  name: "slap",
  aliases: ["hit"],
  description: "Slaps the mentioned user.",
  category: "Actions",
  utilisation: "{prefix}slap",
  async execute(client, message, args) {
    let target = message.mentions.users.first();
    const mapIter = message.mentions.users[Symbol.iterator]();
    if (message.mentions.users.size > 1) {
      if (mapIter.next().value[1].id == client.user.id) {
        target = mapIter.next().value[1];
      }
    }

    let user;
    if (!args[0]) return message.reply("Please mention a user or a name.");

    if (target) {
      user = target.username;
    } else {
      user = args.join(" ");
    }
    let owo = await neko.sfw.slap();
    t = `${message.author.username} Slaps ${user}`;
    client.embed.actionembed(message, t, owo.url);
  },
};
