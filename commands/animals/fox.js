const fetch = require("node-fetch");

module.exports = {
  name: "fox",
  aliases: [],
  description: "Sends Fox's Image.",
  category: "Animals",
  utilisation: "{prefix}Fox",
  async execute(client, message, args) {
    const res = await fetch("https://some-random-api.ml/animal/fox");
    const name = `🦊 Waul 🦊`;
    client.embed.animals(client, message, args, res, name);
  },
};
