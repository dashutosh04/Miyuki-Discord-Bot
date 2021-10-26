module.exports = async (client, message, Discord) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return 


    let prefix = await client.db.fetch(`prefix_${ message.guild.id}`)
    if(prefix === null) prefix = 'm!';
    
        
    const prefixmentioned = new RegExp(`^<@!?${client.user.id}> `);

    prefix = message.content.match(prefixmentioned)
      ? message.content.match(prefixmentioned)[0]
      : prefix;

    if (message.content === `<@!731431395745988649>`)  return client.commands.get('mentionhelp').execute(client, message)
    
    if (message.content.toLowerCase().indexOf(prefix) !== 0) return;

    var args = message.content.slice(prefix.length).trim().split(' ');
   
    var command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))
    
try{  
    if (cmd) cmd.execute(client, message, args);
}catch(err){
    console.log(err)        
}
};