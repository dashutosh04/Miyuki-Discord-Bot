const fetch = require("node-fetch");

module.exports = {
  name: "kangaroo",
  aliases: [],
  description: "Sends kangaroo's Image.",
  category: "Animals",
  utilisation: "{prefix}kangaroo",
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animal/kangaroo");
    const name = `🐼 Ruff 🐼`;
    client.embed.animals(client, message, args, res, name);
  },
};
