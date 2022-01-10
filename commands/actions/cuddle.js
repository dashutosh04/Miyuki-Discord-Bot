const nek = require("nekos.life");
const neko = new nek();
module.exports = {
  name: "cuddle",
  aliases: [],
  description: "Cuddles the mentioned user.",
  category: "Actions",
  utilisation: "{prefix}Cuddle @mention_user",

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
        return message.reply(`Umm is there no one to hug you. :pleading_face:`);
      user = target.username;
    } else {
      user = args.join(" ");
    }
    let tag = ["Cute!!", "Lewd!", "UwU"];
    let rtag = Math.floor(Math.random() * tag.length);
    let owo = await neko.sfw.cuddle();
    t = `${message.author.username} cuddles ${user} ${tag[rtag]}`;
    client.embed.actionembed(message, t, owo.url);
  },
};
