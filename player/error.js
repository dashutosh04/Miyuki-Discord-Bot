module.exports = (client,message, queue, tracks)=>{
    if (queue && queue.message) 
    
        queue.message.channel.send(`**[ "error" ]** ${message}`);
    else console.error(message)

}