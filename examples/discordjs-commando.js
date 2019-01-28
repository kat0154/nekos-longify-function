const commando = require ('discord.js-commando');
const discord = require('discord.js');
const longify = require('nekos-longify-function');

const client = new Commando.Client();

class BotinfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'botinfo',
            group: 'simple',
            memberName: 'botinfo',
            description: 'sends info on the bot'
        });
    }

    async run(message)
    {
		let now = this.client.user.createdAt;

		let t = longify(now, {
                botify: true
            });
        let i = t.split(' ');

 message.channel.send(`i was created on\n\`\`\`${i[0]}, ${i[1]} ${i[2]}, ${i[3]} at ${i[4]} ${i[5]}\`\`\``);
                                     //format:    day ,  month daynumber,  year  at   time   AM/PM
				//
				//note: AM/PM will show as 'undefined' if military is true
				//note: time & AM/PM will show as 'undefined' if notime is true
    }
}
module.exports = BotinfoCommand;

console.log('botinfo command is online')
