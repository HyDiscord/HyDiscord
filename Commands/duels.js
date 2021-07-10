const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'duels',
    aliases: [ "d" ],
    execute(message, args) {
        if(!args[0]) { // if someone didn't type in gamemode
            const embed = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .setColor(color)
                .addField('h!duels', '`h!duels` lets you see duels stats about a player.')
                .addField('Usage', '`h!duels classic` \n`h!duels uhc`\n`h!duels skywars`\n`h!duels bridge`\n`h!duels sumo`\n`h!duels op`\n`h!duels combo`')
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/Duels-64.png')

            message.channel.send(embed);

        }

        if (args[0] == 'classic') {
            if (!args[1]) { // if someone didn't type in ign 
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!duels classic cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('Classic Duels Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `\`${commaNumber(player.stats.duels.classic.kills)}\``, true)
                    .addField('Losses:', `\`${commaNumber(player.stats.duels.classic.losses)}\``, true)
                    .addField('Deaths:', `\`${commaNumber(player.stats.duels.classic.deaths)}\``, true)
                    .addField('Wins:', `\`${commaNumber(player.stats.duels.classic.wins)}\``, true)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    if (args[1]) {
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

        if (args[0] == 'uhc') {
            if (!args[1]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!duels uhc cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('UHC Duels Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `\`${commaNumber(player.stats.duels.uhc.v1.kills)}\``, true)
                    .addField('Losses:', `\`${commaNumber(player.stats.duels.uhc.v1.losses)}\``, true)
                    .addField('Deaths:', `\`${commaNumber(player.stats.duels.uhc.v1.deaths)}\``, true)
                    .addField('Wins:', `\`${commaNumber(player.stats.duels.uhc.v1.wins)}\``, true)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    if (args[1]) {
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

        if (args[0] == 'skywars' || args[0] == 'sw') {
            if (!args[1]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!duels skywars cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('SkyWars Duels Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `\`${commaNumber(player.stats.duels.skywars.v1.kills)}\``, true)
                    .addField('Losses:', `\`${commaNumber(player.stats.duels.skywars.v1.losses)}\``, true)
                    .addField('Deaths:', `\`${commaNumber(player.stats.duels.skywars.v1.deaths)}\``, true)
                    .addField('Wins:', `\`${commaNumber(player.stats.duels.skywars.v1.wins)}\``, true)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    if (args[1]) {
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

        if (args[0] == 'bridge') {
            if (!args[1]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!duels bridge cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('The Bridge Duels Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `\`${commaNumber(player.stats.duels.bridge.v1.kills)}\``, true)
                    .addField('Losses:', `\`${commaNumber(player.stats.duels.bridge.v1.losses)}\``, true)
                    .addField('Deaths:', `\`${commaNumber(player.stats.duels.bridge.v1.deaths)}\``, true)
                    .addField('Wins:', `\`${commaNumber(player.stats.duels.bridge.v1.wins)}\``, true)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    if (args[1]) {
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

        if (args[0] == 'sumo') {
            if (!args[1]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!duels sumo cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('Sumo Duels Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `\`${commaNumber(player.stats.duels.sumo.kills)}\``, true)
                    .addField('Losses:', `\`${commaNumber(player.stats.duels.sumo.losses)}\``, true)
                    .addField('Deaths:', `\`${commaNumber(player.stats.duels.sumo.deaths)}\``, true)
                    .addField('Wins:', `\`${commaNumber(player.stats.duels.sumo.wins)}\``, true)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    if (args[1]) {
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

        if (args[0] == 'op') {
            if (!args[1]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!duels op cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('OP Duels Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', `\`${commaNumber(player.stats.duels.op.v1.kills)}\``, true)
                    .addField('Losses:', `\`${commaNumber(player.stats.duels.op.v1.losses)}\``, true)
                    .addField('Deaths:', `\`${commaNumber(player.stats.duels.op.v1.deaths)}\``, true)
                    .addField('Wins:', `\`${commaNumber(player.stats.duels.op.v1.wins)}\``, true)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    if (args[1]) {
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

        if (args[0] == 'combo') {
            if (!args[1]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!duels combo cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('Combo Duels Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setColor(color)
                    .addField('Kills:', `\`${commaNumber(player.stats.duels.combo.kills)}\``, true)
                    .addField('Losses:', `\`${commaNumber(player.stats.duels.combo.losses)}\``, true)
                    .addField('Deaths:', `\`${commaNumber(player.stats.duels.combo.deaths)}\``, true)
                    .addField('Wins:', `\`${commaNumber(player.stats.duels.combo.wins)}\``, true)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    if (args[1]) {
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
}