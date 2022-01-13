
function getGuild(client, GuildID) {
  return new Promise((resolve, reject) => {
    client.connection.query(
      `SELECT * FROM PREFIX WHERE guild_id = ${GuildID}`,
      function (error, rows) {
        resolve(rows);
      }
    );
  });
}

module.exports = { getGuild };
