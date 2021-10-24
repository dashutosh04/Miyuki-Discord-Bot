const {MessageEmbed} = require('discord.js');
const Fetch = require("node-fetch")
module.exports = {
    name: 'Awooify',
    aliases: ["aw"],
    description: "Awooifies your user's avatar",
    category: 'Image Generator',
    utilisation: '{prefix}awooify',

async execute(client,message,args){

    let user;

        if(message.mentions.users.first()) {
            user = message.mentions.users.first();

        } else if (!isNaN(args[0])) {
            user = message.guild.members.cache.get(args[0]).user;

        } else {
            user = message.author;
        }
        let avatar = user.displayAvatarURL({ dynamic: "true" , size: 1024 ,format: "png"});
    if (!avatar) throw new Error(`No Image`);

    const res = await Fetch(`https://nekobot.xyz/api/imagegen?type=awooify&url=${encodeURIComponent(avatar)}`), json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);
    let hug = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setImage(json.message)
    message.reply({ embeds: [hug] });  

    
    

    }
        
}