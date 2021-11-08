module.exports = {
    name: 'marry',
    aliases: ["propose"],
    description: "Shows Your Money",
    category: 'Economy',
    utilisation: '{prefix}balance',

async execute(client,message,args){
var self_status
var partner_status


let target = message.mentions.users.first()

if (target && target.bot) return (`Well, Find a Human`)


const status = await client.database.getStatus(client,message.author)
if(!status[0]) self_status = `Unknown`
else self_status= status[0].status


if(target && !target.bot){
const status_2 = await client.database.getStatus(client,target)
if(!status_2[0]) partner_status = `Unknown`
else partner_status= status_2[0].status
}
if(!target){
    if(self_status = 'single') return message.channel.send(`You are currently single.`)
    if(self_status = 'pending') return message.channel.send(`You have a pending proposal to ${status[0].partner}`)
    if(self_status = 'mingle') return message.channel.send(`You are already mingled to ${status[0].partner}`)
}

if(target && !target.bot){

if(partner_status = 'single') return message.channel.send(`They are currently single.`)
if(partner_status = 'pending') return message.channel.send(`They have a pending proposal`)
if(partner_status = 'mingle') return message.channel.send(`They are already mingled`)
    }



}
}