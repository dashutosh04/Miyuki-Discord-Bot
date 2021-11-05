const {MessageEmbed} = require('discord.js');
const Miyuki = require('miyuki-api')
module.exports = {
    name: 'Baguette',
    aliases: ["bt"],
    description: "Make the mentioned user eat Baguette",
    category: 'Image Generator',
    utilisation: '{prefix}baguette',

async execute(client,message,args){

    let user;

        if(message.mentions.users.first()) {
            user = message.mentions.users.first();

        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;

        } else {
            user = message.author;
        }
        let avatar = user.displayAvatarURL({ dynamic: "true" , size: 1024 ,format: "png"});

        const image = await Miyuki.Baguette(avatar)
  
        let hug = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setImage(image)
        message.reply({ embeds: [hug] });  
    
    

    }
        
}