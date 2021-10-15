module.exports = {
    name: 'prefix',
    category: 'utility',
    description: 'Sets the prefix for this server.',
    usage: `prefix <newPrefix>`,
execute: async (client, message, args) => {
    if(!message.channel.permissionsFor(message.member).has("MANAGE_GUILD")) return message.channel.send(`You don\'t have perms`)
    if(!args[0]) {
        return message.channel.send("Please give the prefix that you want to set")
      }
    if(args[1]) {
        return message.channel.send("You can not set prefix a double argument")
      }
      if(args[0].length > 3) {
        return message.channel.send("You can not send prefix more than 3 characters")
      }

    if(args.join("") === process.env.PREFIX) {
        client.db.delete(`prefix_${message.guild.Id}`)
       return await message.channel.send("Reseted Prefix ✅")
      }


      client.db.set(`prefix_${message.guild.Id}`, args[0])
  await message.channel.send(`Seted Bot Prefix to ${args[0]}`)
}
}