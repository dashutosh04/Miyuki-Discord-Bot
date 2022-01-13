const { MessageEmbed } = require("discord.js");

module.exports = async (client, error) => {
  const channel = client.channels.cache.get("898457094439723019");
  channel.send("error occurred: " + error.message);
  console.log("error occurred: " + error.message);
};
