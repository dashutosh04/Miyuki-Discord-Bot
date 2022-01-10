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

    let owo = await neko.sfw.poke();
    t = `${message.author.username} Pokes ${user}`;
    client.embed.actionembed(message, t, owo.url);
  },
};
