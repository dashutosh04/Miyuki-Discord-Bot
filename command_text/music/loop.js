const { DefaultModesTypes } = require("jericho-player");

module.exports = {
  name: "loop",
  aliases: ["lop", "lp"],
  utilisation: "{prefix}loop queue/track/off",
  category: "Music",
  async execute(client, message, args) {
    const Queue = client.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current))
      return message.reply(":x: Nothing Playing Right now");
    const success = Queue.loop(
      (!args[0] || (args[0] && args[0].toLowerCase().trim() === "track")
        ? DefaultModesTypes.Track
        : undefined) ??
        (args[0] && args[0].toLowerCase().trim() === "queue"
          ? DefaultModesTypes.Queue
          : undefined) ??
        (args[0] && args[0].toLowerCase().trim() === "off"
          ? DefaultModesTypes.Off
          : undefined) ??
        undefined
    );
    if (success) return message.channel.send("Loop was Toggled!");
  },
};
