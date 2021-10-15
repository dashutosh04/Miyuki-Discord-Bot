const {
    createAudioResource,
    entersState,
    joinVoiceChannel,
    AudioPlayerStatus,
    getVoiceConnection,
    VoiceConnectionStatus,
    } = require('@discordjs/voice')
module.exports = {
    name: 'pause',
    aliases: [],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
async execute(client,message,args) {
    client.player.pause();
    client.player.on(AudioPlayerStatus.Paused, () => {
        console.log('The audio player has started playing!');
    });
}
}