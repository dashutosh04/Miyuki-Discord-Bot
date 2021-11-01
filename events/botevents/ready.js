module.exports = async (client) => {
let totalmembers= 0
client.guilds.cache.forEach((guild) => {
    totalmembers += guild.memberCount
    info = {
    name: guild.name,
    members: guild.memberCount
    };
        
client.clan.set(guild.id ,info);
      });
    console.log(`${client.user.username} is online. Servers:- ${client.guilds.cache.size}, Users:- ${totalmembers}`);
    client.user.setPresence({ activities: [{ name: "Under Update" }], status: 'dnd' })
};