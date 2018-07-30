exports.run = (client, message, args) => {

message.channel.sendMessage(`:ping_pong: Pong: **${(client.ping)}**ms`);

}
