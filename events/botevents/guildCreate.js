module.exports = async (client, guild) => {
	const channel = client.channels.cache.get('906136920642433064');
	channel.send(`JOINED ${guild.name} ${guild.id}`);
	client.connection.query(`SELECT guild_id FROM PREFIX WHERE guild_id = ${guild.id}`, function (error, results, fields) {
		if (error) return console.error(error);
		if(results.length == 0){client.connection.query(`INSERT INTO PREFIX(guild_id, prefix) VALUES (${guild.id},\'${process.env.PREFIX}\')`)}
	})  
};