const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'nickname',
    aliases: ["nick"],
    description: "Sets Your nickname",
    category: 'Utility',
    utilisation: '{prefix}nickname  <name>',
async execute(client,message, args) {

    if (!args[0]) return message.channel.send('New nick missing');
        const nickname = message.content.slice(message.content.indexOf(args[0]), message.content.length);
    if (nickname.length > 32) {
        return message.channel.send('Something went wrong');
    } else if (message.member === message.guild.owner) {
        return message.channel.send('Something went wrong');
    } else {
        try {
            await message.member.setNickname(nickname);
            const nn = new MessageEmbed()
              .setTitle('Change Nickname')
              .setDescription(`${message.member}'s nick changed`)
              .addField('Member', message.member, true)
              .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
              .setTimestamp()
              .setColor(message.guild.me.displayHexColor);
            message.channel.send(nn);
    
          } catch (err) {
            console.log(err.stack);
            message.channel.send('Please check the role heirarchy..');
          }
        } 
}}