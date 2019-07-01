console.log("Conectando...")
const Discord = require('discord.js'),
    client = new Discord.Client({
        autoReconnect: true,
        messageCacheMaxSize: 2024,
        fetchAllMembers: true,
        disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
        messageCacheLifetime: 1680,
        disableEveryone: true,
        messageSweepInterval: 1680
    });
    config = require("./config.json"),
    token = config.token;

let prefix = config.prefix,
    dono = config.dono;

client.login(token)

client.on("ready", () => {
 
    console.log("Conectado!!")
    console.log(`Servidores(${client.guilds.size}):\n${client.guilds.map(servidor => servidor.name).join(", ")}`)
    setInterval(() => {
        client.user.setPresence({ game: { name: `${client.user.username} - ${client.guilds.size} servidores`, type: 0 } });
    }, 1 * 60 * 1000)

})

client.on("message", (message) => {

    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run({Discord, client, message, args});
    } catch (err) {

        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);

    }

})
