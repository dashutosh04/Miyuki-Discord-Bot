const nek = require("nekos.life");
const neko = new nek();

module.exports = {
  name: "kiss",
  aliases: ["umma"],
  description: "Kisses the mentioned user.",
  category: "Actions",
  utilisation: "{prefix}kiss @mention_user",
  async execute(client, message, args) {
    let owo = await neko.sfw.kiss().catch((err) => {
      console.log(err);
    });

    let target = message.mentions.users.first();
    let user;

    if (!args[0]) return message.reply("Please mention a user to hug.");

    if (args[0].toLowerCase().trim() === "me")
      return message.reply("Du.. do you want me to kiss you 👀.");

    if (args[0].toLowerCase().trim() === "him")
      return message.reply("I will kiss him. 😜 \nNext time ping him.");

    if (args[0].toLowerCase().trim() === "her")
      return message.reply(
        "Why you want to kiss her, kiss me instead :point_right::point_left: \nNext time ping her."
      );

    if (target) {
      if (target.username === message.author.username)
        return message.reply("Du.. do you want me to kiss you 👀.");
      user = target.username;
    } else {
      user = args[0];
    }

    let tag = ["Cute!!", "Lewd!", "UwU"];
    let rtag = Math.floor(Math.random() * tag.length);
    t = `${message.author.username} kisses ${user} ${tag[rtag]}`;
    client.embed.actionembed(client, message, args, t, owo.url);
  },
};
