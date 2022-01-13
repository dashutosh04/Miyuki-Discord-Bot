const fetch = require("node-fetch");

module.exports = {
  name: "panda",
  aliases: [],
  description: "Sends Panda's Image.",
  category: "Animals",
  utilisation: "{prefix}Panda",
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animal/panda");
    const name = `🐼 Ruff 🐼`;
    client.embed.animals(client, message, args, res, name);
  },
};
