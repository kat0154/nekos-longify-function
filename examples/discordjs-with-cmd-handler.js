let longify = require('nekos-longify-function');

exports.run = (client,message) => {
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
exports.help = {
	name: "botinfo"
}