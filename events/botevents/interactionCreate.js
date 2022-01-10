module.exports = async (client, interaction) => {
  if (!interaction.isCommand()) return;
  const command = client.slashcommands.get(interaction.commandName);

  if (!command) return console.log("That command was not found");
  try {
    await command.execute(client, interaction);
  } catch (e) {
    interaction.reply("An error occurred while executing that command.");
  }
};
  