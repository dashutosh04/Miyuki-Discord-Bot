
function getBalance(client,target){
    return new Promise((resolve,reject) => {
        client.connection.query(`SELECT balance FROM CURRENCY WHERE user_id = ${target.id}`,function (error, rows){
            resolve(rows)
        });
    });
}

async function sendBalance(client,message,args,target){
    await client.connection.query(`UPDATE CURRENCY SET BALANCE = BALANCE - ${args[0]} WHERE user_id = ${message.author.id}`)
    await client.connection.query(`UPDATE CURRENCY SET BALANCE = BALANCE + ${args[0]} WHERE user_id = ${target.id}`)
    message.channel.send(`> <:currency:817760294246940715> **${message.author.username}** sent **${args[0]} Micash!** to **${target.username}**`)
}
function getGuild(client,GuildID){
    return new Promise((resolve,reject) => {
        client.connection.query(`SELECT * FROM PREFIX WHERE guild_id = ${GuildID}`,function (error, rows){
            resolve(rows)
        });
    });
}




function Propose(client,target){
    return new Promise((resolve,reject) => {
        client.connection.query(`SELECT * FROM LOVE WHERE user_id = ${message.author.id}`,function (error, rows){
            resolve(rows)
        });
    });
}
function getStatus(client,target){
    return new Promise((resolve,reject) => {
        client.connection.query(`SELECT * FROM LOVE WHERE user_id = ${target.id}`,function (error, rows){
            resolve(rows)
        });
    });
}
function updateStatus(client,message,target,status){
    return new Promise((resolve,reject) => {
        client.connection.query(`UPDATE LOVE SET STATUS = \'${status}\' WHERE user_id = ${target.id}`,function (error, rows){
            resolve(rows)
        });
    });
}




module.exports = {getBalance,sendBalance,Propose,getStatus,getGuild}