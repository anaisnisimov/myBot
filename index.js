const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjI5MzUxODM1MjE5NjU2NzU0.XZYfkg.Z0C8V1941SwaTUOE1Xdnspeu4GQ';
// check if bot is ready to be a bot
bot.on('ready', () => {
    console.log('this bot is alive')
});

// bot send a message
bot.on('message', msg => {
if(msg.content === "hello you"){
    //bot reply to message
    msg.reply('hello friend');
}
});
// bot send a message
bot.on('message', msg => {
    if (msg.content === "ping") {
        //bot reply to message
        msg.reply('pong');
    }
});
//login my bot
bot.login(token);