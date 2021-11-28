module.exports = async (client) => {
function status(){
    let member = 0
    client.guilds.cache.forEach((guild) => {
        member += guild.memberCount
    client.totalmembers = member
        client.user.setPresence({ activities: [{ name: `with ${member} Users in ${client.guilds.cache.size} Servers .✨` }], status: 'online'})
    })
} setInterval(status, 30000)
totalmembers = 0
client.guilds.cache.forEach((guild) => {
    totalmembers += guild.memberCount
    info = {
    name: guild.name,
    members: guild.memberCount
    };
        
client.clan.set(guild.id ,info);
      });
    console.log(`${client.user.username} is online. Servers:- ${client.guilds.cache.size}, Users:- ${totalmembers}`);
client.connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
        console.log('Database connected as id ' + client.connection.threadId);
      });
};