module.exports = (client, queue, tracks) => { 
    queue.message.channel.send(`${client.emotes.success}Requested songs has been added in the queue.\nTracks added in the queue\`${tracks.length}\``).then(sent =>{
        setTimeout(() =>{
            sent.delete()
        },1000)
    })

};