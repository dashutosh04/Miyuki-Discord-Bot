const { Random } = require("something-random-on-discord");
module.exports = {
  name: "punch",
  aliases: ["boom"],
  description: "punches the user",
  category: "Actions",
  utilisation: "{prefix}punch @mention_user ",

  async execute(client, message, args) {
    let target = message.mentions.users.first();

    let user;
    if (!args[0]) return message.reply("Please mention a user or a name.");

    if (args[0].toLowerCase().trim() === "me")
      return message.reply("You were puched. BRUTAL!!");

    if (target) {
      if (target.username === message.author.username)
        return message.reply(`You were puched. BRUTAL!!`);
      user = target.username;
    } else {
      user = args[0];
    }
    let data = await Random.getAnimeImgURL("punch");
    t = `${message.author.username} punched ${user}`;
    client.embed.actionembed(client, message, args, t, data);
  },
};
