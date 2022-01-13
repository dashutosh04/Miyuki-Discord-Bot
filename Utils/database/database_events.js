async function onmsg_setprefix(client, guild) {
  client.connection.query(
    `SELECT guild_id FROM PREFIX WHERE guild_id = ${guild.id}`,
    function (error, results, fields) {
      if (error) return console.error(error);
      if (results.length == 0) {
        client.connection.query(
          `INSERT INTO PREFIX(guild_id, prefix) VALUES (${guild.id},\'${process.env.PREFIX}\')`
        );
      }
    }
  );
}

async function user_check(client, message) {
  client.connection.query(
    `SELECT guild_id FROM PREFIX WHERE guild_id = ${message.guild.id}`,
    function (error, results, fields) {
      if (error) return console.error(error);
      if (results.length == 0) {
        client.connection.query(
          `INSERT INTO PREFIX(guild_id, prefix) VALUES (${message.guild.id},\'${process.env.PREFIX}\')`
        );
      }
    }
  );
}
module.exports = { onmsg_setprefix, user_check };
