const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'ChangeMyMind',
    aliases: ["cmm"],
    description: "Changes your mind",
    category: 'Image Generator',
    utilisation: '{prefix}ChangeMyMind',

async execute(client,message,args){

    if (!args[0]) return message.reply("Please enter a text after the command..");

    let hug = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(`https://vacefron.nl/api/changemymind?text=${args.join('+')}`)
    .setTimestamp()
    message.reply({ embeds: [hug] ,messageReferenceID: message.Id}); 
    
    }
        
}