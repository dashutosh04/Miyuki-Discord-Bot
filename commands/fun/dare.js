const {MessageEmbed} = require('discord.js');
const r = require('miyuki-api');
module.exports = {
    name: 'dare',
    aliases: ["d"],
    description: "",
    category: 'Fun',
    utilisation: '{prefix}dare',
execute(client,message,args){
    const truth = r.dare();
    const Embed1 = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`<:PepeEvilThink:876323457112100914> ${truth}`)
        .setFooter(`By ${message.author.username}`)
    message.channel.send({ embeds: [Embed1] });
}}