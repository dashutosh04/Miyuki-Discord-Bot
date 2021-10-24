module.exports = async (client, message, Discord) => {


    client.player.on('error', (message, queue, tracks) => {
        queue.message.reply(`**[ "error" ]** Error Name in Queue - \`${message}\``)
      })
      client.player.on('queueEnd', (queue) => {
        queue.message.reply(`**[ "queueEnd" ]** Queue End`)
      })
      client.player.on('botDisconnect', (queue) => {
        queue.message.reply(`**[ "botDisconnect" ]** Bot has been Disconnected`)
      })
      client.player.on('trackStart', (Queue, track) => {
        Queue.message.reply(
          `**[ "trackStart" ]** Now Playing Song - \`${track.title}\` \n url: \`${track.url}\``,
        )
      })
      client.player.on('tracksAdd', (queue, tracks) => {
        queue.message.reply(
          `**[ "tracksAdd" ]** Tracks Added in Queue - \`${tracks.length}\``,
        )
      })
      client.player.on('trackStart', (Queue, track) => {
        Queue.message.reply(
          `**[ "trackStart" ]** Now Playing Song - \`${track.title}\``,
        )
      })


    
}