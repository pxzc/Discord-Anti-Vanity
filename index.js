const phin = require('phin')
const Discord = require('discord.js-selfbot-v13')
const client = new Discord.Client({ intents: 131071, checkUpdate: false })

const token = ''
const vanity = ''
const guildid = ''

client.on('ready', async () => {

  console.log(`${client.user.username} is online!`)  
})

client.on('guildUpdate', async (guild, newGuild) => {

  if (guild.id == guildid) {

    if (guild.vanityURLCode !== newGuild.vanityURLCode) {

        phin({
          method: 'PATCH',
          url: `https://discord.com/api/v9/guilds/${guildid}/vanity-url`,
          json: true,
          headers: {
            "accept": "*/*",
            "Content-Type": 'application/json',
            "Authorization": `${token}`
          },
          data: JSON.stringify({ code: `${vanity}` })

      }, (err, res, bod) => { }).catch(() => { })
    }
  }
})

client.login(token)
