const { MessageEmbed } = require("discord.js");
const Random = require("srod-v2");
module.exports = {
  name: "yt comment",
  aliases: ["yc"],
  description: "Wastes you",
  category: "Image Generator",
  utilisation: "{prefix}yt comment",

  async execute(client, message, args) {
    let avatar = message.user.avatarURL({
      dynamic: "true",
      size: 1024,
      format: "png",
    });
    let name = message.author.username;
    if (!name || !avatar || !args)
      throw new Error(
        `Please Give All The Following Things:\nName, Image (Format: png), Comment`
      );

    const Name = encodeURIComponent(name),
      Image = encodeURIComponent(avatar),
      Comment = encodeURIComponent(args.join(" "));
    let hug = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Your Comment")
      .setTimestamp()
      .setImage(
        `https://some-random-api.ml/canvas/youtube-comment?avatar=${Image}&username=${Name}&comment=${Comment}`
      );
    message.reply({ embeds: [hug] });
  },
};
