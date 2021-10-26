const fs = require('fs');
const discord = require('discord.js');
const {Intents} = require('discord.js')
const{JerichoPlayer} = require('jericho-player')
require('dotenv').config();
const client = new discord.Client({ intents: [
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
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,],
  restTimeOffset: 0,
  partials: ['CHANNEL', 'MESSAGE', 'REACTION'],
  disableMentions: 'everyone' });



client.db = require('quick.db')
client.player = new JerichoPlayer(client);
client.config = require('./config/config');
client.emotes = client.config.emojis;
client.commands = new discord.Collection();



fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});
const Playerevents = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    const event = require(`./events/${file}`);
   client.on(file.split(".")[0], event.bind(null, client));
};
for (const file of Playerevents) {
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};


client.on('error', (error) => { console.log(`Emitted Error - ${error}`); });

client.login(process.env.TOKEN);