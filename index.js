const Discord = require('discord.js');
var fs = require("fs");

const client = new Discord.Client()

const prefix = '%';

client.once('ready', () => {
	console.log('einstein is online!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	
	switch (args[0]){
		case 'hello':
			message.channel.send('hello');
		case 'quote':
			var data = fs.readFileSync('einsteinquotes.txt').toString();
			var quotes = data.split("\n");
			var quote_nr = Math.floor(Math.random() * 484) + 1;
			var quote = quotes[quote_nr];
			message.channel.send(quote);
	}
});



client.login(fs.readFileSync('token.secret').toString());
