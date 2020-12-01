// external libs
import * as Discord from 'discord.js';

// internal libs
import * as Bot from './bot.js'

// start discord client
const client = new Discord.Client();

Bot.start();

client.on('ready', () => {
    Bot.ready();
})

client.on('message', message => {
    // standardize message
    let msg = message.content.toLowerCase();

    // get an answer
    let answer = Bot.getAnswer(msg);

    // send answer if it exists
    if (answer) {
        message.channel.send(answer);
    }
});

client.login('Nzc4OTI0NTc5Njg2OTczNDUy.X7ZECw.2sU4DrSfwM0G1vMpdkD2n7c6mMQ');