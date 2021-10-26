module.exports = {
    name: 'play',
    aliases: ["p"],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
async execute(client,message,args) {
if(!args[0]) return message.channel.send('Please provide a song name')
message.channel.send(`Searching for requested songs ${client.emotes.typing} `).then(sent => {
    setTimeout(() =>{
        sent.delete()
    },10000)
})
var Queue = client.player.CreateQueue(message, {
    LeaveOnEmptyTimedout: 5,
    LeaveOnEndTimedout: 5
    })
await Queue.play(args.join(" "),message.member.voice.channel,message)


}}