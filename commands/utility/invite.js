const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    name: 'invite',
    aliases: ['inv'],
    category: 'Utility',
    utilisation: '{prefix}invite',
async execute(client,message) {
  message.channel.send("");
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
}

