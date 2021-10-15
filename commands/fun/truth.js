const {MessageEmbed} = require('discord.js');
const r = require('better-tord');
module.exports = {
    name: 'truth',
    aliases: ["t"],
    description: "",
    category: 'Fun',
    utilisation: '{prefix}truth',
execute(client,message,args){
    
const truth = r.get_truth();
    message.channel.send(truth)
    
}}