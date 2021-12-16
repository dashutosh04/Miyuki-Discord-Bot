const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord");
module.exports = {
  name: "waifu",
  aliases: ["wf"],
  description: "Provides you a random waifu image.",
  category: "Image Generator",
  utilisation: "{prefix}waifu",

  async execute(client, message, args) {
    let data = await Random.getAnimeImgURL("waifu");

    let hug = new MessageEmbed()
      .setImage(data)
      .setColor("RANDOM")
      .setTimestamp();

    message.channel.send(hug);
  },
};
