module.exports = (client,message, queue, tracks)=>{
    if (queue && queue.message) 
    
        queue.message.reply(`**[ "error" ]** ${message}`);
    else console.error(message)

}