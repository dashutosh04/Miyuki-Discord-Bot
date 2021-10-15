const {MessageEmbed} = require('discord.js');
var figlet = require('figlet');
const { Random } = require("something-random-on-discord");
module.exports = {
    name: 'encode',
    aliases: [],
    description: "",
    category: 'Text Generator',
    utilisation: '{prefix}encode',

async execute(client,message,args){
    var maxLen = 100 
  
    if(args.join(' ').length > maxLen) return message.channel.send(`The max length is ${maxLen}!`) 
    
    if(!args[0]) return message.channel.send('Please enter some text.');
    
    figlet(`${args.join(' ')}`, function(err, data) {
        if (err) {
            console.log('k...');
            console.dir(err);
            return;
        }
  
        message.channel.send(`${data}`, {code: 'AsciiArt'});
    });
    

    }
        
}