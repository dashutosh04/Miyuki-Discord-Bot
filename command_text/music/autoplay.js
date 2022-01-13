const { DefaultModesTypes } = require("jericho-player");

module.exports = {
  category: "Music",
  name: "autoplay",
  aliases: ["ap", "autop"],
  utilisation: '{prefix}autoplay "Despacito"',
  async execute(client, message, args) {
    const Queue = client.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current)) {
      message.channel.send("The queue is empty.");
    }
    const success = Queue.autoplay(
      args[0]
        ? args[0].toLowerCase().trim() === DefaultModesTypes.Off
          ? DefaultModesTypes.Off
          : `${args[0]}`
        : undefined
    );
    if (success) {
      return message.channel.send("Autoplay Activated");
    } else if (args[0] && args[0].toLowerCase().trim() === "off") {
      return message.channel.send("Autoplay Activated");
    }

    return message.channel.send("Error occurred while activating the autoplay");
  },
};
