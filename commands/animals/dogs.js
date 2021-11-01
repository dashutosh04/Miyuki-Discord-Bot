const fetch = require('node-fetch');

module.exports = {
    name: 'dogs',
    aliases: [],
    description: "Sends a dogs image.",
    category: 'Animals',
    utilisation: '{prefix}dogs',
async execute(client,message,args){
    const res = await fetch('https://some-random-api.ml/animal/dog');
    const name = '🐶  Ruff!!  🐶'
    client.embed.animals(client,message,args,res,name)
          
    
}



}