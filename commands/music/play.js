
module.exports = {
    name: 'play',
    aliases: ["p"],
    description: "Join your vc",
    category: 'Music',
    utilisation: '{prefix}Join',
async execute(client,message,args) {

var Queue = client.player.CreateQueue(message, {
    LeaveOnEmptyTimedout: 5,
    LeaveOnEndTimedout: 5,
    })
await Queue.play(args.join(" "),message.member.voice.channel)



    }
}