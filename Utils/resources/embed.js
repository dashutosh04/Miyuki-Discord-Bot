const{MessageEmbed} = require('discord.js')
const fetch = require('node-fetch');
function actionembed(client,message,args,t,url){
    let Aembed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(t, `${message.author.displayAvatarURL({size:2048,dynamic:true})}`)
    .setTimestamp()
    .setImage(url)
    message.channel.send({ embeds: [Aembed] });
}
async function animals(client,message,args,res,name){
    const img = (await res.json()).image;
    console.log(res)
    let Aembed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${name}`, `${message.author.displayAvatarURL({size:2048,dynamic:true})}`)
    .setTimestamp()
    .setFooter(`Requested by:- ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setImage(img)
    message.channel.send({ embeds: [Aembed] });
}
module.exports = {actionembed,animals}
