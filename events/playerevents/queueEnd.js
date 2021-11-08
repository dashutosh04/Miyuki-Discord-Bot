module.exports = (client,queue) => {
    queue.message.channel.send(`${client.emotes.warning} **|** No more songs left to play.`)
  }