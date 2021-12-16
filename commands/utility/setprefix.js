module.exports = {
    name: 'prefix',
    category: 'utility',
    description: 'Sets the prefix for this server.',
    usage: `prefix <newPrefix>`,
async execute(client, message, args){
    if(!message.channel.permissionsFor(message.member).has("MANAGE_GUILD")) return message.channel.send(`You don\'t have perms`)
    if(!args[0]) {
        return message.channel.send("Please give the prefix that you want to set")
      }
    if(args[1]) {
        return message.channel.send("You can not set prefix a double argument")
      }
    if(args[0].length > 7) {
        return message.channel.send("You can not send prefix more than 3 characters")
      }
      client.connection.query(`UPDATE PREFIX SET prefix = \'${args[0]}\' where guild_id = ${message.guild.id}`), function (error, results, fields) {
        if (error) return console.error(error);
    }

  await message.channel.send(`Seted Bot Prefix to ${args[0]}`)
}
}