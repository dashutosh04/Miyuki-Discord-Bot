module.exports = (client,queue) => {
    queue.message.channel.send(`${client.emotes.error} - The music was stopped because i was not in a channel..`) 
   
};