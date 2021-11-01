const {MessageEmbed} = require('discord.js');
const { ID } = require("../../utils/config/executive.json")
module.exports = {
        name: 'unlock',
        aliases: [],
        description: "Awooifies your user's avatar",
        category: 'Mod',
        utilisation: '{prefix}moderation',
execute: async (client, message, args) => {
        let lockPermErr = new MessageEmbed()
        .setTitle("ERROR*")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR")  && !ID .includes(message.author.id)) return message.channel.send(lockPermErr);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.permissionOverwrites.create(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`Done | Channel UnLocked!`);
    }
}