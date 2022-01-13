const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: [],
  utilisation: "{prefix}serverinfo",
  category: "Utility",
  async execute(client, message, args) {
    const servericon = message.guild.iconURL;
    const servername = message.guild.name;
    const serverowner = `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`;
    const serverchannels = message.guild.channels.cache.size;
    const serverroles = message.guild.roles.cache.size;
    const servercreatedon = message.guild.createdAt;
    const joinedat = message.member.joinedAt;
    const members = message.guild.memberCount;

    const serverembed = new MessageEmbed()
      .setTitle("Server Information")
      .setColor("RANDOM")
      .setThumbnail(servericon)
      .setDescription(
        `**Server Name**:- ${servername}\n **Owner Name**:- ${serverowner}\n  **Channel Count**:- ${serverchannels} \n **Role Count**:- ${serverroles} \n **Member Count**:- ${members} \n **Server Created on**:- ${servercreatedon} \n **Server joined on**:- ${joinedat}`
      )
      .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL);
    message.reply(serverembed);
  },
};
