const { MessageEmbed } = require("discord.js");
const Fetch = require("node-fetch");
module.exports = {
  name: "blushfact",
  aliases: ["bf"],
  description: "Shows a Fact with blush",
  category: "Image Generator",
  utilisation: "{prefix}blushfact",

  async execute(client, message, args) {
    if (!args[0])
      return message.reply("Please enter a text after the command..");

    const res = await Fetch(
        `https://nekobot.xyz/api/imagegen?type=fact&text=${args.join("+")}`
      ),
      json = await res.json();

    if (!json.message)
      throw new Error(`Something Went Wrong, Try Again Later!`);
    let hug = new MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setImage(json.message);
    await message.reply({ embeds: [hug] });
  },
};
