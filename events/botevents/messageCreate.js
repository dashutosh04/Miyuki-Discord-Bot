module.exports = async (client, message) => {
    var args = message.content.trim().split(' ');

    if (message.author.bot) return;
    if (message.channel.type === 'DM') return client.commands.get('ai').execute(client, message,args)


    let prefix = await client.db.fetch(`prefix_${ message.guild.id}`)
    if(prefix === null) prefix = process.env.PREFIX;   
    
    const prefixmentioned = new RegExp(`^<@!?${client.user.id}> `);

    prefix = message.content.match(prefixmentioned)
      ? message.content.match(prefixmentioned)[0]
      : prefix;
    
    if (!message.content.startsWith(prefix) && message.channel.name.includes('miyuki-songs')){client.commands.get('play').execute(client, message,args)} ;
    if (message.content === `<@!731431395745988649>`||message.content ===`<@731431395745988649>`)  return client.commands.get('mention').execute(client, message)
    


    if (message.content.toLowerCase().indexOf(prefix) !== 0) return;
    args = message.content.slice(prefix.length).trim().split(' ');
    
   
    var command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))
    
try{  
    if (cmd) cmd.execute(client, message, args)
}catch(err){
    console.log(err)        
}};