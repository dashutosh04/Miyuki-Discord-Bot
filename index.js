const fs = require("fs");
var mysql = require("mysql");
const { Client, Intents, Collection } = require("discord.js");
const { Player } = require("jericho-player");
require("dotenv").config();

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
client.clan = new Map();

client.connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

fs.readdirSync("./commands").forEach((dirs) => {
  const commands = fs
    .readdirSync(`./commands/${dirs}`)
    .filter((files) => files.endsWith(".js"));
  for (const file of commands) {
    const command = require(`./commands/${dirs}/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
  }
});
const Playerevents = fs
  .readdirSync("./events/playerevents")
  .filter((file) => file.endsWith(".js"));
const Botevents = fs
  .readdirSync("./events/botevents")
  .filter((file) => file.endsWith(".js"));

for (const file of Botevents) {
  const event = require(`./events/botevents/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
}
for (const file of Playerevents) {
  const event = require(`./events/playerevents/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
}

client.on("error", (error) => {
  console.log(`Emitted Error - ${error}`);
});

client.login(process.env.TOKEN);
