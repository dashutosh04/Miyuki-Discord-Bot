const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'flamegames',
    aliases: ["fg"],
    description: "",
    category: 'Fun',
    utilisation: '{prefix}flamegames',
execute(client,message,args){
    if(!args[0]) return message.channel.send('Please enter the name of first person and execute the command again..')
if(!args[1]) return message.channel.send('Please enter the name of second person and execute the command again ..')
    let status = ["friends", "lovers", "affections" ,"attraction", "Liked ones" , "BFFs"]
    let rstatus = Math.floor(Math.random() * status.length);


message.channel.send(status[rstatus])   
}}