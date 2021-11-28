const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: 'why',
    aliases: [],
    description: "Makes your text a spoiler",
    category: 'Text Generator',
    utilisation: '{prefix}spoiler',
async execute(client, message, args){

async function work() {
 let owo = await neko.sfw.why().then((why) => {
     message.channel.send(why.why);
 })



         
  
        }
        work();
}
};