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
    if (!args[0] || !target) return message.reply("Please mention a user.");

    user = target.username;

    let owo = await neko.sfw.slap();
    t = `${message.author.username} Slaps ${user}`;
    await client.embed.actionembed(message, t, owo.url);
  },
};
