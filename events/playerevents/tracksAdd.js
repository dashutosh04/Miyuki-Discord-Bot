module.exports = (client, queue, tracks) => {
    if(tracks.length>1){
    queue.message.channel.send(`${client.emotes.success}Requested songs has been added in the queue.\nTracks added in the queue\`${tracks.length}\``).then(sent =>{
        setTimeout(() =>{
            sent.delete().catch(err => {})
        },5000)
    })
}
};