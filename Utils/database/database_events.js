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
  let target = message.mentions.users.first();
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
  client.connection.query(
    `SELECT user_id FROM CURRENCY WHERE user_id = ${message.author.id}`,
    function (error, results, fields) {
      if (error) return console.error(error);
      if (results.length == 0) {
        client.connection.query(
          `INSERT INTO CURRENCY(user_id, balance) VALUES (${message.author.id},1000)`
        );
      }
    }
  );
  if (target && !target.bot) {
    client.connection.query(
      `SELECT user_id FROM CURRENCY WHERE user_id = ${target.id}`,
      function (error, results, fields) {
        if (error) return console.error(error);
        if (results.length == 0) {
          client.connection.query(
            `INSERT INTO CURRENCY(user_id, balance) VALUES (${target.id},1000)`
          );
        }
      }
    );
  }
}
module.exports = { onmsg_setprefix, user_check };
