const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("flip")
    .setDescription("Flips a coin"),
  async execute(client, interaction) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    {
      var msg2 = Array(2);
      msg2[1] = "Heads";
      msg2[2] = "Tails";
      var x = getRandomInt(0, 8);
      if (x < 4) {
        await interaction.reply(msg2[1]);
      } else {
        await interaction.reply(msg2[2]);
      }
    }
  },
};
