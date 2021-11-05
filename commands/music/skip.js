module.exports = {
    name: 'skip',
    aliases: [],
    description: "Join your vc",
    category: 'Music',
async execute(client, message) {
  const queue = client.player.GetQueue(message.guild.id);
  
  if(!queue) return message.reply(":x: Nothing Playing Right now")
  console.log(queue.tracks.length)
  if(queue.tracks.length == 1) return queue.stop()
  queue.skip()
  message.delete().catch(err => {})
}};
