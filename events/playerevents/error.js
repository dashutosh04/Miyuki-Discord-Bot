module.exports = (client,message, queue, tracks)=>{
    if (queue && queue.message) 
    
        queue.message.channel.send(`${client.emotes.error} **|** An error occurred while executing that command.`);
    else console.error(message)

}