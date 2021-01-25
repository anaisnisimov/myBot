const Discord = require('discord.js');
const client = new Discord.Client();
const prefix='!';
const {TOKEN} = require('./configs');
//creation d'une collection de command pour le bot discord
const fs = require('fs');
client.commands = new Discord.Collection();

// on filtre pour s'assurer qu'on va chercher nos collections de commandes dans des fichiers js
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


// check if bot is ready to be a bot
client.once('ready', () => {
    console.log('this bot is alive')
});

// bot send a message
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
    const command= args.shift().toLowerCase();
    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }
     if(command === 'whoareyou'){
         client.commands.get('wikipedia').execute(message, args);
    }
});

//login my bot
client.login(TOKEN);