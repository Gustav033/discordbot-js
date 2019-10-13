exports.run = ({client, message, args}) => {
  let medidor = await message.channel.send("ping?");
  let userms = medidor.createTimestamp - message.createdTimedtamp + "ms";
  let pingfinal = `Pong! :ping_pong: | Ping: ${userms} | Ping Da Api: ${Math.floor(client.ping))`;
  medidor.delete();
  message.reply(pingfinal);
}
