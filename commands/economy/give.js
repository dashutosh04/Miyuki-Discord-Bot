module.exports = {
    name: 'give',
    aliases: ["send"],
    description: "Shows Your Money",
    category: 'Economy',
    utilisation: '{prefix}balance',

async execute(client,message,args){
    let target = message.mentions.users.first()
    if (!target) return message.channel.send(`> ❌ **${message.author.username}** Run the command again and this time mention someone.`);
    if (target.bot) return  message.channel.send(`> ❌ **${message.author.username}** Nub!, you can't send **Micash!** to a bot`)
    if(isNaN(args[0])) return message.channel.send(`> ❌ **${message.author.username}** Please enter a valid amount`)
    if(args[0] < 0 || args[0] == 0 ) return message.channel.send(`> ❌ **${message.author.username}** Nub!, you can't send **0 Micash!**`)
var cash = ''
const currency = await client.database_func.getBalance(client,target)
if(!currency[0]) return cash = 0
else cash = currency[0].balance
if(cash < args[0]) return message.channel.send(`> ❌ **${message.author.username}** Nub!, you don't have enough **Micash!**`)
if(cash >= args[0]){client.database_func.sendBalance(client,message,args,target)}


}
}