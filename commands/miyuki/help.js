const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'help',
    aliases: ['h','madad' ,'cmd'],
    category: 'main',
    utilisation: '{prefix}help <command name>',

async execute(client, message, args) {
const Guild = await client.database.getGuild(client,message.guild.id)
if(!Guild[0]) prefix = process.env.PREFIX
else prefix = Guild[0].prefix

        if (!args[0]) {
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
            hp.addFields(
                { name: '> 🎵 Music', value: music },
                { name: '> 👀 Image Generator', value: Mg },
                { name: '> 😜 Actions', value: actions },
                { name: '> 🐻 Animals', value: animals },
                { name: '> 😀 Emotes', value: emotes },
                { name: '> ❣ Text Generator', value: Tg },
                { name: '> 🛠️ Utility', value: utility },
                { name: '> 🎈 Moderation', value: mod },
            )
            .setTimestamp()
            .setFooter(`For more info for a specific command, ${prefix}help {command name}.`)
            message.reply({ embeds: [hp] }); 
            
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);


            const ts = new MessageEmbed()
            .setAuthor('HELP PANEL','https://i.imgur.com/eTmFq2M.gif')
            .setColor('#5AEDEF')
            .addFields(
                    { name: '> Name', value: command.name, inline: true },
                    { name: '> Category', value: command.category, inline: true },
                    { name: '> Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                    { name: '> Utilisation', value: command.utilisation.replace('${prefix}', prefix), inline: true },
                
            )
            .setTimestamp()
            message.channel.send({ embeds: [ts] }); ;
        };
    },
};