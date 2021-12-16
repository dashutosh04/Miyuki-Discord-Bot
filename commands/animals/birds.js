const fetch = require("node-fetch");

module.exports = {
  name: "birds",
  aliases: [],
  description: "Sends a bird image.",
  category: "Animals",
  utilisation: "{prefix}bird",
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animal/birb");
    const name = `🐦 Chirrup 🐦`;
    client.embed.animals(client, message, args, res, name);
  },
};
