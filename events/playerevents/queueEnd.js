module.exports = (client,queue) => {
  if (queue && queue.message){
    queue.message.channel.send(`${client.emotes.warning} **|** No more songs left to play.`)
  }}