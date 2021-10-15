const {MessageEmbed} = require('discord.js');
const r = require('better-tord');
module.exports = {
    name: 'dare',
    aliases: ["d"],
    description: "",
    category: 'Fun',
    utilisation: '{prefix}dare',
execute(client,message,args){
    const dare = r.get_dare();
    message.channel.send(dare);
}}