const nek = require("nekos.life");
const neko = new nek();

module.exports = {
  name: "hug",
  aliases: [],
  description: "Hugs the mentioned user or name.",
  category: "Actions",
  utilisation: "{prefix}hug @mention_user",

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
      if (target.username === message.author.username)
        return message.reply(
          `Umm is there no one to hug you. :pleading_face:`
        );
      user = target.username;
    } else {
      user = args.join(" ");
    }
    let tag = ["Cute!!", "Lewd!", "UwU"];
    let rtag = Math.floor(Math.random() * tag.length);
    let owo = await neko.sfw.hug();
    t = `${message.author.username} Hugs ${user} ${tag[rtag]}`;
    client.embed.actionembed(message, t, owo.url);
  },
};
