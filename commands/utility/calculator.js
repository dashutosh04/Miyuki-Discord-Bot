const math = require('math-expression-evaluator');

module.exports = {
    name: 'calculate',
    aliases: ["calc"],
    description: "Calculates",
    category: 'Utility',
    utilisation: '{prefix}calculate <problem>',
async execute(client, message, args){
 
  
  if(args.length < 1)
  return message.reply(`Type in an equation`);

const question = args.join(' ');

let answer;
if(question.indexOf('9 + 10') > -1) {
  answer = '21';
} else {
  try {
      answer = math.eval(question);
  } catch (err) {
      message.channel.send(`I don't know how to solve this problem:`);
      return
  }
}

message.channel.send(`**Equation:**\n\`\`\`\n${question}\n\`\`\`**Answer:**\n\`\`\`\n${answer}\n\`\`\``)
  }
  };