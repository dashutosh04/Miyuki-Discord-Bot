module.exports = (client, queue) => {
  queue.message.channel.send(
    `${client.emotes.warning} **|** The music was stopped because i was disconnected from the Voice Channel 💫`
  );
};