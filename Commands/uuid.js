const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require ('../Storages/embed.json')
module.exports = {
    name: 'uuid',
    async execute(message, args){
        if(!args[0]) { // if someone didn't type in ign
            return message.channel.send('You need to type in a player\'s IGN! (Example: `h!uuid cxntered`)')
        }
        
        const playerUUID = await fetch(`https://playerdb.co/api/player/minecraft/${args[0]}`); // fetch uuid
        const playerUUIDData = await playerUUID.json();

        const embed = new Discord.MessageEmbed()
        .setAuthor('UUID', 'https://i.imgur.com/OuoECfX.jpeg')
        .addField('Username', `\`${playerUUIDData.data.player.username}\``)
        .addField('UUID', `\`${playerUUIDData.data.player.id}\``)
        .addField('Trimmed UUID', `\`${playerUUIDData.data.player.raw_id}\``)
        .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.data.player.id}?overlay&size=256`)
        .setColor(color)
        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send(embed)
    }
}