const Discord = require('discord.js');                                                                                                                                                                                            
const client = new Discord.Client();  
console.log("I am Ready"); 
var prefix = "!";

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-users')){
if(!message.author.id === '506157117921689602') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login("NTQ2MzIxNjg2Nzc4MDg1Mzk4.D0mhVg.sAEpkTuPzb5hHtrPD9y-IsNWyg0")
