const {MessageEmbed} = require('discord.js');
const { Random } = require("something-random-on-discord");
module.exports = {
    name: 'cry',
    aliases: ["sad"],
    description: "Makes the user cry.",
    category: 'Emotes',
    utilisation: '{prefix}cry',

    async execute(client,message,args){
        let tag = ["Aww","Needs a Hug","Alone...."]
        let rtag = Math.floor(Math.random() * tag.length);
        let data = await Random.getAnimeImgURL("cry");
        let cry = new MessageEmbed()
        .setImage(data)
        .setColor("RANDOM")
        .setFooter(`${message.author.username} is crying there.. ${tag[rtag]}`)
        .setTimestamp()
    
        message.reply({ embeds: [cry] }); 

    }
        
}