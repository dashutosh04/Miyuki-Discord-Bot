const nek = require("nekos.life");
const neko = new nek();

module.exports = {
  name: "kiss",
  aliases: ["umma"],
  description: "Kisses the mentioned user.",
  category: "Actions",
  utilisation: "{prefix}kiss @mention_user",
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

    if (target.username === message.author.username)
      return message.reply(`Umm is there no one to kiss you. :pleading_face:`);
    user = target.username;

    let tag = ["Cute!!", "Lewd!", "UwU"];
    let rtag = Math.floor(Math.random() * tag.length);
    let owo = await neko.sfw.kiss();
    t = `${message.author.username} kisses ${user} ${tag[rtag]}`;
    await client.embed.actionembed(message, t, owo.url);
  },
};
