const client = require("nekos.life");
const neko = new client();

module.exports = {
  name: "spoiler",
  aliases: [],
  description: "Makes your text a spoiler",
  category: "Text Generator",
  utilisation: "{prefix}spoiler",
  async execute(client, message, args) {
    async function work() {
      let coolusertext = args.join(" ");
      if (!coolusertext)
        return message.reply("Please type some text to owoify.");
      if (coolusertext.length > 200)
        return message.reply(
          `I can't owoify your text, it is over 200 characters long!`
        );

      let owo = await neko.sfw.spoiler({ text: coolusertext });
      message.reply(owo.owo).catch((error) => {
        console.error(error);
      });
    }
    message.delete(message);
    work();
  },
};
