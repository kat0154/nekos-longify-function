const Discord = require('discord.js');
const longify = require('nekos-longify-function');

const token = "ur-token";
const prefix = "pl/";

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
});

client.on('message', (message) => {
if(message.author.bot)return;
if(message.channel.type !== "text")return;
if(!message.content.startsWith(prefix))return;

const args = message.content.split(' ');
let command = args[0];
command = command.slice(prefix.length)

if(command === "botinfo"){
  let now = client.user.createdAt;

let t = longify(now, {
    botify: true
});
let i = t.split(' ');

message.channel.send(`i was created on\n\`\`\`${i[0]}, ${i[1]} ${i[2]}, ${i[3]} at ${i[4]} ${i[5]}\`\`\``);
                                     //format:   day ,  month  daynumber, year  at   time   AM/PM
									//
								   //note: AM/PM will show as 'undefined' if military is true
								  //note: time & AM/PM will show as 'undefined' if notime is true
}
});
client.login(token);