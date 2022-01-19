const { Random } = require("something-random-on-discord");
module.exports = {
  name: "punch",
  aliases: ["boom"],
  description: "punches the user",
  category: "Actions",
  utilisation: "{prefix}punch @mention_user ",

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

    let data = await Random.getAnimeImgURL("punch");
    t = `${message.author.username} punched ${user}`;
    await client.embed.actionembed(message, t, data);
  },
};
