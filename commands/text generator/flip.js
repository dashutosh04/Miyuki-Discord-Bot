module.exports = {
    name: 'flipacoin',
    aliases: ["cf","flip"],
    description: "Flips a coin..",
    category: 'Text Generator',
    utilisation: '{prefix}flipacoin',
async execute(client, message, args){
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  {
  var msg2 = Array(2);
          msg2[1] = "Heads";
          msg2[2] = "Tails";
          var x = getRandomInt(0, 8);
          if (x < 4){
              message.channel.send(msg2[1]);
          }
          else{
              message.channel.send(msg2[2]);
          }
      }
          
  }
  };