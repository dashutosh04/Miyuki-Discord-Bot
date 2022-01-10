const nek = require("nekos.life");
const neko = new nek();

module.exports = {
  name: "tickle",
  aliases: [],
  description: "Posts a tickle",
  category: "Actions",
  utilisation: "{prefix}tickle",
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
    let owo = await neko.sfw.tickle();
    t = `${message.author.username} Tickles ${user}`;
    client.embed.actionembed(message, t, owo.url);
  },
};
