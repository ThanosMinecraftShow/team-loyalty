const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.ODE2OTM4MDM3MTExNjg1MTQx.YECO1g.mTPcTWhz8ZDQLjN5VRcwuK5gxrk);
