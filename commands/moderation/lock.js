const {MessageEmbed} = require('discord.js');
const { ID } = require("../../config/executive.json")
module.exports = {
        name: 'lock',
        aliases: [],
        description: "Awooifies your user's avatar",
        category: 'Mod',
        utilisation: '{prefix}moderation',
execute: async (client, message, args) => {
        let lockPermErr = new MessageEmbed()
        .setTitle("ERROR*")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") && !ID .includes(message.author.id) ) return message.channel.send('Error Occured');

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.permissionOverwrites.create(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`Done | Channel Locked!`);
    }
}