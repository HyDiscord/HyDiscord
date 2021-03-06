const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number')

module.exports = {
    name: 'buildbattle',
    aliases: [ "bb", "build" ],
    execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!buildbattle cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setAuthor('Build Battle Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/BuildBattle-64.png')
                .addField('Coins:', `\`${commaNumber(player.stats.buildbattle.coins)}\``, true)
                .addField('Total Wins:', `\`${commaNumber(player.stats.buildbattle.winsTotal)}\``, true)
                .addField('Total Games:', `\`${commaNumber(player.stats.buildbattle.playedGames)}\``, true)
                .addField('Total Votes:', `\`${commaNumber(player.stats.buildbattle.totalVotes)}\``, true)
                .addField('Score:', `\`${commaNumber(player.stats.buildbattle.score)}\``, true)
                .addField('Solo Wins:', `\`${commaNumber(player.stats.buildbattle.wins.solo)}\``, true)
                .addField('Team Wins:', `\`${commaNumber(player.stats.buildbattle.wins.team)}\``, true)
                .addField('Pro Wins:', `\`${commaNumber(player.stats.buildbattle.wins.pro)}\``, true)
                .addField('Guess That Build Wins:', `\`${commaNumber(player.stats.buildbattle.wins.gtb)}\``, true)

            message.channel.send(embed);

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