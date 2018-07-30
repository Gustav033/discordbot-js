exports.run = (client, message, args) => {

message.channel.sendMessage(`:ping_pong: **Meu ping:** **${(client.ping)}**ms`);

}