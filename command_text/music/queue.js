module.exports = {
  name: "queue",
  aliases: ["q"],
  utilisation: "{prefix}queue 6",
  category: "Music",
  async execute(client, message, args) {
    const Queue = client.player.GetQueue(message.guild.id);
    if (!Queue || (Queue && !Queue.current))
      return message.reply(":x: Nothing Playing Right now");
    var Index =
      args[0] &&
      Number(args[0]) &&
      Number(args[0]) < Queue.tracks.length &&
      Number(args[0]) > 0
        ? Number(args[0])
        : 0;

    var StringArrays = Queue.tracks.map(
      (track, index) =>
        `**Track Index :** \`${index}\`\n**Track ID :** \`${track.Id}\`\n**Name :** \`${track.title}\`\n**Author :** \`${track.channelId}\`\n**Duration :** \`${track.human_duration}\`\n**URl :** [Track Url](${track.url})\n`
    );
    StringArrays = StringArrays.slice(Index, Index + 5);
    StringArrays = StringArrays.filter(Boolean);
    if (Queue.tracks.length > StringArrays.length) {
      StringArrays.push(
        `More \`${Number(
          Queue.tracks.length - (5 + Index)
        )}+\` Tracks are Present in Queue`
      );
    }
    const ReturnEmbed = {
      title: "Current Queue Stats",
      description: `__**Current ${Index + 1}/${
        Queue.tracks.length
      } Tracks Data**__\n\n${StringArrays.join("\n")}`,
      field: {
        title: `Queue Progress Bar`,
        value: Queue.createProgressBar("queue"),
      },
    };
    return void (await ReturnEmbedGen(client, ReturnEmbed, message));
  },
};
