const { ID } = require("../../utils/config/executive.json");
module.exports = {
  name: "mysql",
  aliases: [],
  description: "Gives an answer from the 8-ball",
  category: "Text Generator",
  utilisation: "{prefix}8ball",
  async execute(client, message, args) {
    if (!ID.includes(message.author.id))
      return message.reply("Only the Executives can use this command");
    client.connection.query(
      `${args.join(" ")}`,
      function (error, results, fields) {
        if (error) return console.error(error);
        console.log(results);
        if (results.length == 0)
          return message.reply(`${client.emotes.warning} **|** No results .`);

        if (results)
          return message.reply(
            `\`\`\`${JSON.stringify(results).slice(0, 998)}\`\`\``
          );
      }
    );
  },
};
