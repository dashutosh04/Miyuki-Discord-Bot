const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'lovecount',
    aliases: ["lc"],
    description: "",
    category: 'Fun',
    utilisation: '{prefix}lovecount',
execute(client,message,args){
if(!args[0]) return message.channel.send('Please enter the name of first person and execute the command again..')
if(!args[1]) return message.channel.send('Please enter the name of second person and execute the command again ..')
let love = Math.floor(Math.random() * 100);
message.channel.send(`Love Count = ${love}%`)
}} 