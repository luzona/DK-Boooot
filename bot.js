const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :  عدد الاعبين الذين وصلت لهم الرساله بنجاح`); 
 message.delete(); 
};    
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : LuZoNa`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : LuZoNa ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Viper RolePlay Server`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NTQ2MDM3MDEzMTU4MDM1NDc2.D0iYVA.NOt_thCXVqlEhOD5HqDv-1i9diQ");
