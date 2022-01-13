const { MessageEmbed } = require('discord.js')

async function ErrorEmbedGen(client, CacheData, message) {
  const ErrorEmbedValue = new MessageEmbed().setAuthor(client.user.username)
  CacheData.title ? ErrorEmbedValue.setTitle(`${CacheData.title}`) : undefined
  CacheData.description
    ? ErrorEmbedValue.setDescription(`${CacheData.description}`)
    : undefined
  ErrorEmbedValue.setFooter('Error has been Occoured!!')
  ErrorEmbedValue.setColor('RED')
  CacheData.image ? ErrorEmbedValue.setImage(`${CacheData.image}`) : undefined
  CacheData.thumbnail
    ? ErrorEmbedValue.setThumbnail(`${CacheData.thumbnail}`)
    : undefined
  return void (await message.channel
    .send({ embeds: [ErrorEmbedValue] })
    .catch(
      (error) =>
        void message.author.send(
          '__**Missing Permissions in Server or Channel**__\n*Check for Channel Permissions for Manage Message and Send Messages*',
        ),
    ))
}

async function ReturnEmbedGen(client, CacheData, message) {
  const ErrorEmbedValue = new MessageEmbed().setAuthor(client.user.username)
  CacheData.title ? ErrorEmbedValue.setTitle(`${CacheData.title}`) : undefined
  CacheData.description
    ? ErrorEmbedValue.setDescription(`${CacheData.description}`)
    : undefined
  ErrorEmbedValue.setFooter('Operation is Successfull!!')
  ErrorEmbedValue.setColor('GREEN')
  CacheData.image ? ErrorEmbedValue.setImage(`${CacheData.image}`) : undefined
  CacheData.thumbnail
    ? ErrorEmbedValue.setThumbnail(`${CacheData.thumbnail}`)
    : undefined
  CacheData.field
    ? ErrorEmbedValue.addField(CacheData.field.title, CacheData.field.value, false)
    : undefined
  return void (await message.channel
    .send({ embeds: [ErrorEmbedValue] })
    .catch(
      (error) =>
        void message.author.send(
          '__**Missing Permissions in Server or Channel**__\n*Check for Channel Permissions for Manage Message and Send Messages*',
        ),
    ))
}

module.exports = { ErrorEmbedGen, ReturnEmbedGen }
