const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'mentionhelp',
    aliases: [],
    category: '',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
       
            const actions = message.client.commands.filter(x => x.category == 'Actions').map((x) => '`' + x.name + '`').join(' ,  ');
            const animals = message.client.commands.filter(x => x.category == 'Animals').map((x) => '`' + x.name + '`').join(' ,  ');
            const emotes = message.client.commands.filter(x => x.category == 'Emotes').map((x) => '`' + x.name + '`').join(' ,  ');
            const Mg = message.client.commands.filter(x => x.category == 'Image Generator').map((x) => '`' + x.name + '`').join(' ,  ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(' ,  ');
            const Tg = message.client.commands.filter(x => x.category == 'Text Generator').map((x) => '`' + x.name + '`').join(',  ');
            const utility = message.client.commands.filter(x => x.category == 'Utility').map((x) => '`' + x.name + '`').join(' ,  ');
            const mod = message.client.commands.filter(x => x.category == 'Mod').map((x) => '`' + x.name + '`').join(' ,  ');
            
            const hp = new MessageEmbed()
            .setAuthor('Help Panel 🛠️ ',`${message.author.displayAvatarURL({size:2048,dynamic:true})}`)
            .setDescription("This is the list of commands of this bot that you can use.")
            .setColor('RANDOM')
            .addFields(
                { name: '> 🎵 Music', value: music },
                { name: '> 👀 Image Generator', value: Mg },
                { name: '> 😜 Actions', value: actions },
                { name: '> 🐻 Animals', value: animals },
                { name: '> 😀 Emotes', value: emotes },
                { name: '> ❣ Text Generator', value: Tg },
                { name: '> 🛠️ Utility', value: utility },
                { name: '> 🎈 Moderation', value: mod },
            )
            .setImage('https://i.imgur.com/pOCJuO0.gif')
            .setTimestamp()
            .setFooter("For more info for a specific command, use d!help {command name}.")
            message.reply({ embeds: [hp] }); 
            
        
    }
};