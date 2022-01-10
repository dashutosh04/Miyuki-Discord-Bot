const { ID } = require("../../utils/config/executive.json");
const { MessageEmbed, Permissions } = require("discord.js");
const moment = require("moment");

const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible",
};

module.exports = {
  name: "info",
  aliases: [],
  description: "Shows a defination",
  category: "Utility",
  utilisation: "{prefix}define",
  async execute(client, message, args) {
    var permissions = [];
    var acknowledgements = "None";
    let whoisPermErr = new MessageEmbed()
      .setTitle("**User Permission Error!**")
      .setDescription("**Sorry, you don't have permissions to use this! ❌**");

    if (!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES"))
      return message.channel.send(whoisPermErr);

    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
      permissions.push("Kick Members");
    }

    if (member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
      permissions.push("Ban Members");
    }

    if (member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
      permissions.push("Administrator");
    }

    if (member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
      permissions.push("Manage Messages");
    }

    if (member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
      permissions.push("Manage Channels");
    }

    if (member.permissions.has(Permissions.FLAGS.MENTION_EVERYONE)) {
      permissions.push("Mention Everyone");
    }

    if (member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) {
      permissions.push("Manage Nicknames");
    }

    if (member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
      permissions.push("Manage Roles");
    }

    if (member.permissions.has(Permissions.FLAGS.MANAGE_WEBHOOKS)) {
      permissions.push("Manage Webhooks");
    }

    if (permissions.length == 0) {
      permissions.push("No Key Permissions Found");
    }

    if (member.user.id == message.guild.ownerID) {
      acknowledgements = "Server Owner";
    }
    if (ID.includes(member.user.id)) {
      acknowledgements = "My Owner";
    }
    const embed = new MessageEmbed()
      .setAuthor({name:
        `${member.user.tag}`,url:
        member.user.displayAvatarURL({ dynamic: true })
      })
      .setColor("WHITE")
      .setFooter(`ID: ${message.author.id}`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .addField(
        "__Joined at:__ ",
        `${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`,
        true
      )
      .addField("__Created On__", member.user.createdAt.toLocaleString(), true)
      .addField(
        `\n__Roles [${
          member.roles.cache
            .filter((r) => r.id !== message.guild.id)
            .map((roles) => `\`${roles.name}\``).length
        }]__`,
        `${
          member.roles.cache
            .filter((r) => r.id !== message.guild.id)
            .map((roles) => `<@&${roles.id}>`)
            .join(" **|** ") || "No Roles"
        }`,
        true
      )
      .addField("\n__Acknowledgements:__ ", `${acknowledgements}`, true)
      .addField("\n__Permissions:__ ", `${permissions.join(` **|** `)}`);

    message.channel.send({ embeds: [embed] });
  },
};
