const fetch = require("node-fetch");

module.exports = {
  name: "koala",
  aliases: [],
  description: "Sends koala's Image.",
  category: "Animals",
  utilisation: "{prefix}koala",
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animal/koala");
    const name = `🐼 Ruff 🐼`;
    client.embed.animals(client, message, args, res, name);
  },
};
