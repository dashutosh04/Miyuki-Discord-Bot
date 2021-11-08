module.exports = async (client, guild) => {
	const channel = client.channels.cache.get('906136920642433064');
	channel.send(`LEFT ${guild.name} ${guild.id}`);
	client.connection.query(`DELETE FROM PREFIX WHERE guild_id = ${guild.id}`, function (error, results, fields) {
		if (error) return console.error(error);
	})  
};