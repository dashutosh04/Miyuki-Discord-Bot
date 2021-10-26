module.exports = (client,message, queue, tracks)=>{
    if (queue && queue.message) 
    
        queue.message.channel.send(`An error occurred while processing the command`);
    else console.error(message)

}