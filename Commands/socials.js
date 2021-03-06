const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'socials',
    async execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!socials cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0]).then(async (player) => {
            const playerUUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`); // fetch uuid
            const playerUUIDData = await playerUUID.json();

            let embed = new Discord.MessageEmbed()
                .setAuthor('Social Media', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.id}?overlay&size=256`)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')


            if (player.socialMedia[0] != undefined || player.socialMedia[0] != null) {
                embed.addField(player.socialMedia[0].name, player.socialMedia[0].link)
            }

            if (player.socialMedia[1] != undefined || player.socialMedia[1] != null) {
                embed.addField(player.socialMedia[1].name, player.socialMedia[1].link)
            }

            if (player.socialMedia[2] != undefined || player.socialMedia[2] != null) {
                embed.addField(player.socialMedia[2].name, player.socialMedia[2].link)
            }

            if (player.socialMedia[3] != undefined || player.socialMedia[3] != null) {
                embed.addField(player.socialMedia[3].name, player.socialMedia[3].link)
            }

            if (player.socialMedia[4] != undefined || player.socialMedia[4] != null) {
                embed.addField(player.socialMedia[4].name, player.socialMedia[4].link)
            }

            if (player.socialMedia[5] != undefined || player.socialMedia[5] != null) {
                embed.addField(player.socialMedia[5].name, player.socialMedia[5].link)
            }

            if (player.socialMedia[6] != undefined || player.socialMedia[6] != null) {
                embed.addField(player.socialMedia[6].name, player.socialMedia[6].link)
            }

            message.channel.send(embed)

        }).catch(e => { // error messages
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                const player404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('I could not find that player in the API. Check spelling and name history.')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(player404)
            } else {
                if (args[0]) {
                    const error = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    message.channel.send(error)
                }
            }       
        });
    }
}