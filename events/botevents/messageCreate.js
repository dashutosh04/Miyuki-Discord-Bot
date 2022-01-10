module.exports = async (client, message) => {
  var args = message.content.trim().split(" ");
  var prefix;

  if (message.author.bot) return;

  client.database_events.onmsg_setprefix(client, message.guild);
  client.database_events.user_check(client, message);

  const Guild = await client.database_func.getGuild(client, message.guild.id);
  if (!Guild[0]) prefix = process.env.PREFIX;
  else prefix = Guild[0].prefix;

  const prefixmentioned = new RegExp(`^<@!?${client.user.id}> `);

  prefix = message.content.match(prefixmentioned)
    ? message.content.match(prefixmentioned)[0]
    : prefix;

  if (
    !message.content.startsWith(prefix) &&
    message.channel.name.includes("miyuki-songs")
  ) {
    client.commands.get("play").execute(client, message, args);
  }
  if (
    message.content === `<@!731431395745988649>` ||
    message.content === `<@731431395745988649>`
  )
    return client.commands.get("mention").execute(client, message);

  if (message.content.toLowerCase().indexOf(prefix) !== 0) return;
  args = message.content.slice(prefix.length).trim().split(" ");

  var command = args.shift().toLowerCase();

  const cmd =
    client.commands.get(command) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));

  try {
    if (cmd) cmd.execute(client, message, args);
  } catch (err) {
    console.log(err);
  }
};
