const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    category: 'Music',
    voiceChannel: true,

execute(client, message) {
        const queue = client.player.GetQueue(message.guild.id);
        if (!queue || !queue.playing) return message.channel.send(`${client.emotes.error} **No Music Playing right Now**`);

        const track = queue.tracks[0];
        const embed = new MessageEmbed();

        embed.setColor('GREEN');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(`Now Playing`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));
        embed.setDescription(`**Title** - \`${track.title}\` \n**Volume** - \`${queue.volume}\`% **\nDuration** - \`${track.human_duration}\`**\nRequested by** - ${track.requestedBy}\n**Voice Channel** - <#${queue.message.member.voice.channel.id}>`);
        embed.setTimestamp();
        embed.setFooter(`👍${track.likes} || 👎${track.dislikes}`, message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
        message.delete().catch(err => {})
    },
};