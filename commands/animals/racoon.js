const fetch = require('node-fetch');

module.exports = {
    name: 'raccoon',
    aliases: [],
    description: "Sends Raccoon's Image.",
    category: 'Animals',
    utilisation: '{prefix}Raccoon',
async execute(client,message,args){
     const res = await fetch('https://some-random-api.ml/animal/raccoon');
        const name = `🐼 Ruff 🐼`
        client.embed.animals(client,message,args,res,name)
    
}



}