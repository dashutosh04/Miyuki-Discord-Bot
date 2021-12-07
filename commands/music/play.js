module.exports = {
    name: 'play',
    aliases: ["p"],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
async execute(client,message,args) {
if(!args[0]) return message.channel.send('Please provide a song name')
const channel = message.member.voice.channel;

  if (!channel) return message.channel.send("You must Join a voice channel before using this command!");
await message.channel.send(`Searching for requested songs ${client.emotes.typing} `).then(sent => {
    setTimeout(async() => {
        await sent.delete().catch(err => {})
    },10000)
})
var Queue = client.player.CreateQueue(message)
await Queue.play(args.join(" "),message.member.voice.channel,message)
console.log(Queue.tracks)
await message.delete().catch(err => {})

}}