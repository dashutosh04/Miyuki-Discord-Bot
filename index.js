const fs = require("fs");
var mysql = require("mysql");
const { Client, Intents, Collection } = require("discord.js");
const { Player } = require("jericho-player");
require("dotenv").config();
const { BotLists } = require("discord-botlists");
const botlist = new BotLists(
  undefined,
  {
    topgg: {
      authorizationToken: process.env.topggbot,
      authorizationValue: process.env.topgg,
    },
  },
  11487,
  "unit1.nighthost.tech"
);
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
  partials: ["CHANNEL", "MESSAGE", "REACTION"],
  disableMentions: "everyone",
});

client.database_func = require("./utils/database/database_func.js");
client.database_events = require("./utils/database/database_events.js");
client.embed = require("./utils/embeds/command_embeds.js");
client.player = new Player(client);

client.emotes = require("./utils/config/emojis").emojis;
client.commands = new Collection();
client.slashcommands = new Collection();
client.comms = [];

client.connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

fs.readdirSync("./command_text").forEach((dirs) => {
  const commands = fs
    .readdirSync(`./command_text/${dirs}`)
    .filter((files) => files.endsWith(".js"));
  for (const file of commands) {
    const command = require(`./command_text/${dirs}/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
  }
});

fs.readdirSync("./command_slash").forEach((dirs) => {
  const commandFiles = fs
    .readdirSync(`./command_slash/${dirs}`)
    .filter((file) => file.endsWith(".js"));

  for (const com of commandFiles) {
    const command = require(`./command_slash/${dirs}/${com}`);
    client.comms.push(command.data.toJSON());
    client.slashcommands.set(command.data.name, command);
  }
});
const PlayerEvents = fs
  .readdirSync("./events/playerevents")
  .filter((file) => file.endsWith(".js"));
const ClientEvents = fs
  .readdirSync("./events/clientevents")
  .filter((file) => file.endsWith(".js"));
const GuildEvents = fs
  .readdirSync("./events/guildevents")
  .filter((file) => file.endsWith(".js"));
const MessageEvents = fs
  .readdirSync("./events/messageevents")
  .filter((file) => file.endsWith(".js"));
const ErrorEvents = fs
  .readdirSync("./events/errorevents")
  .filter((file) => file.endsWith(".js"));
const InteractionEvents = fs
  .readdirSync("./events/interactionevents")
  .filter((file) => file.endsWith(".js"));

const BotlistEvents = fs
  .readdirSync("./events/botlistevents")
  .filter((file) => file.endsWith(".js"));

const ProcessEvents = fs
  .readdirSync("./events/processevents")
  .filter((file) => file.endsWith(".js"));

for (const file of ClientEvents) {
  const event = require(`./events/clientevents/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}
for (const file of PlayerEvents) {
  const event = require(`./events/playerevents/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
}
for (const file of ErrorEvents) {
  const event = require(`./events/errorevents/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}
for (const file of GuildEvents) {
  const event = require(`./events/guildevents/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}
for (const file of MessageEvents) {
  const event = require(`./events/messageevents/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}
for (const file of InteractionEvents) {
  const event = require(`./events/interactionevents/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}
for (const file of BotlistEvents) {
  const event = require(`./events/botlistevents/${file}`);
  botlist.on(file.split(".")[0], event.bind(null, client));
}
for (const file of ProcessEvents) {
  const event = require(`./events/processevents/${file}`);
  process.on(file.split(".")[0], event.bind(null, client));
}

new Promise(async (resolve) => {
  resolve(await botlist.start());
});

new Promise(async (resolve) => {
  resolve(
    await botlist.poststats({
      bot_id: client.user.id,
      server_count: client.guilds.cache.size,
    })
  );
});

client.login(process.env.TOKEN);
