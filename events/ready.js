module.exports = async (client) => {
    console.log(`${client.user.username} is online. Servers:- ${client.guilds.cache.size}, Users:- ${client.users.cache.size}`);
    client.user.setPresence({ activities: [{ name: "Under Update" }], status: 'dnd' })

};