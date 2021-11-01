const fetch = require('node-fetch');

module.exports = {
    name: 'cats',
    aliases: [],
    description: "Sends a cats image.",
    category: 'Animals',
    utilisation: '{prefix}cats',
async execute(client,message,args){
    const res = await fetch('https://some-random-api.ml/animal/cat');
    const name = `🐈 Meow 🐈`
    client.embed.animals(client,message,args,res,name)
    
}



}