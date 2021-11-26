module.exports = async (client, message) => {
var args = message.content.trim().split(' ');
var prefix = ""
let target = message.mentions.users.first()
if(message.author == client.user) return
if(message.author.bot) return

if (message.channel.type === 'DM') return client.commands.get('ai').execute(client, message,args)
//if (message.guild.id == '827588862267621437' && message.content.split(" ").join("").toLowerCase().includes('bts')) return message.delete().catch(err =>{})
client.connection.query(`SELECT guild_id FROM PREFIX WHERE guild_id = ${message.guild.id}`, function (error, results, fields) {
    if (error) return console.error(error);
    if(results.length == 0){client.connection.query(`INSERT INTO PREFIX(guild_id, prefix) VALUES (${message.guild.id},\'${process.env.PREFIX}\')`)}
})  
client.connection.query(`SELECT user_id FROM CURRENCY WHERE user_id = ${message.author.id}`, function (error, results, fields) {
    if (error) return console.error(error);
    if(results.length == 0){client.connection.query(`INSERT INTO CURRENCY(user_id, balance) VALUES (${message.author.id},1000)`)}
})
if(target && !target.bot){
client.connection.query(`SELECT user_id FROM CURRENCY WHERE user_id = ${target.id}`, function (error, results, fields) {
    if (error) return console.error(error);
    if(results.length == 0){client.connection.query(`INSERT INTO CURRENCY(user_id, balance) VALUES (${target.id},1000)`)}
})
}
client.connection.query(`SELECT user_id FROM LOVE WHERE user_id = ${message.author.id}`, function (error, results, fields) {
    if (error) return console.error(error);
    if(results.length == 0){client.connection.query(`INSERT INTO LOVE(user_id, status) VALUES (${message.author.id},'single')`)}
})
if(target && !target.bot){
client.connection.query(`SELECT user_id FROM LOVE WHERE user_id = ${target.id}`, function (error, results, fields) {
    if (error) return console.error(error);
    if(results.length == 0){client.connection.query(`INSERT INTO LOVE(user_id, status) VALUES (${target.id},'single')`)}
})
}

function getGuild(GuildID){
    return new Promise((resolve,reject) => {
        client.connection.query(`SELECT * FROM PREFIX WHERE guild_id = ${GuildID}`,function (error, rows){
            resolve(rows)
        });
    });
}

const Guild = await getGuild(message.guild.id)
if(!Guild[0]) prefix = process.env.PREFIX
else prefix = Guild[0].prefix

const prefixmentioned = new RegExp(`^<@!?${client.user.id}> `);

prefix = message.content.match(prefixmentioned)
    ? message.content.match(prefixmentioned)[0]
    : prefix;
    
if (!message.content.startsWith(prefix) && message.channel.name.includes('miyuki-songs')){client.commands.get('play').execute(client, message,args)} ;
if (message.content === `<@!731431395745988649>`|| message.content ===`<@731431395745988649>`)  return client.commands.get('mention').execute(client, message)
///if(message){client.commands.get('autoreact').execute(client, message,args)}    
if (message.content.toLowerCase().indexOf(prefix) !== 0) return;
    args = message.content.slice(prefix.length).trim().split(' ');
    
var command = args.shift().toLowerCase();

const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))
    
try{  
    if (cmd) cmd.execute(client, message, args)
}catch(err){
    console.log(err)        
}};