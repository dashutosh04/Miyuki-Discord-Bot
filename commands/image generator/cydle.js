const { MessageEmbed } = require("discord.js");
const Fetch = require("node-fetch");
module.exports = {
  name: "Clyde",
  aliases: ["cy"],
  description: "Send your message via Clyde",
  category: "Image Generator",
  utilisation: "{prefix}Clyde",

  async execute(client, message, args) {
    if (!args[0])
      return message.reply("Please enter a text after the command..");

    const res = await Fetch(
        `https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join("+")}`
      ),
      json = await res.json();

    if (!json.message)
      throw new Error(`Something Went Wrong, Try Again Later!`);
    let hug = new MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setImage(json.message);
    message.reply({ embeds: [hug] });

    return message.channel.send(Data);
  },
};
