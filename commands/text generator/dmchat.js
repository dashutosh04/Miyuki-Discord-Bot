const fetch = require('node-fetch');
module.exports = {
    name: 'ai',
    aliases: [],
    description: "Ai chat",
    category: 'Text Generator',
    utilisation: '{prefix}ai',
execute: async (client, message, args) => {

    res = await fetch(`https://api.monkedev.com/fun/chat?msg=${args.join('')}&key=hPfSppLiteKFZYiBckOMXDYsT`)
    const text = (await res.json()).response
    message.reply(text).catch(error => {message.reply('Umm i am sleeping right now, Come back later')})
}




}