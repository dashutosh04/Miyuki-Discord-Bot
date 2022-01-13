const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
module.exports = async (client) => {
  function status() {
    let member = 0;
    client.guilds.cache.forEach((guild) => {
      member += guild.memberCount;
    });
    client.user.setPresence({
      activities: [
        {
          name: `with ${member} Users in ${client.guilds.cache.size} Servers .✨`,
        },
      ],
      status: "online",
    });
  }

  setInterval(status, 30000);

  let member = 0;
  client.guilds.cache.forEach((guild) => {
    member += guild.memberCount;
  });

  client.connection.connect(function (err) {
    if (err) {
      console.error(
        "There was an error connecting to the database" + err.stack
      );
      return;
    }
    console.log("Database connected 💝");
  });

  console.log(
    `${client.user.username} is online. Servers:- ${client.guilds.cache.size}, Users:- ${member}`
  );

  const CLIENT_ID = client.user.id;
  const GUILD_ID = "931053983060074517";

  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

  (async () => {
    try {
      console.log("Started refreshing application (/) commands.");

      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
        body: client.comms,
      });

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  })();
};
