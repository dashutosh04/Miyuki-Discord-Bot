module.exports = {
    name: 'balance',
    aliases: ["cash","bal"],
    description: "Shows Your Money",
    category: 'Economy',
    utilisation: '{prefix}balance',

async execute(client,message,args){
let target = message.mentions.users.first()
if(!target || target.bot) target = message.author

var cash = ''
const currency = await client.database_func.getBalance(client,target)
    if(!currency[0]) cash = 0
    else cash = currency[0].balance
message.channel.send(`> <:currency:817760294246940715> **${target.username}**, your current balance is **__${cash.toLocaleString()}__ Micash** `);
}
}