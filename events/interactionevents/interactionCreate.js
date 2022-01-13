module.exports = async (client, message) => {
  if (!message.isCommand()) return;
  const command = client.slashcommands.get(message.commandName);

  if (!command) return console.log("That command was not found");
  try {
    await command.execute(client, message);
  } catch (e) {
    message.reply("An error occurred while executing that command.");
    console.error(e);
  }
};
