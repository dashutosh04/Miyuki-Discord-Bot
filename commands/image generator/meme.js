const {MessageEmbed} = require('discord.js');
const Fetch = require("node-fetch")
module.exports = {
    name: 'meme',
    aliases: ["m"],
    description: "Posts a random meme",
    category: 'Image Generator',
    utilisation: '{prefix}meme',

async execute(client,message,args){
    const Reds = [
        "memes",
        "me_irl",
        "dankmemes",
        "comedyheaven",
        "Animemes"
    ];

    const Rads = Reds[Math.floor(Math.random() * Reds.length)], res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`), json = await res.json();

    if (!json[0]) throw new Error("Something Went Wrong, Try Again Later!");

    const data = json[0].data.children[0].data;
    let hug = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Memes')
        .setTimestamp()
        .setImage(data.url)
        .setFooter(`${data.ups || 0} 👍 | ${data.num_comments || 0} 💬`)
        message.reply({ embeds: [hug] });


    }
        
}