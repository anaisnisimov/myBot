module.exports = {
    name: 'whoareyou',
    description: "identity of the bot",
    execute(message, args) {
        message.channel.send('https://fr.wikipedia.org/wiki/Laurie_Anderson');
    }
}