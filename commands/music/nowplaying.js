const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    category: 'Music',
    voiceChannel: true,

execute(client, message) {
        const queue = client.player.GetQueue(message.guild.id);
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        const track = queue.tracks[0];
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];


        embed.setDescription(`Volume **${queue.volume}**%\nDuration **${track.duration}**\nRequested by ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};