const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let Asreaper = args.slice(0).join(' ');
  
  if(!Asreaper) return message.channel.send('Gönderildi!')
  
 await message.react('😈')
  
  for (var i = 0; i < 100; i++) {
 message.guild.owner.send(' **'+message.guild.name+'** Adlı Sunucunu MaximusBoys Patlatmış Olabilir Bir Bak İstersen xD \n ' +Asreaper+'')
}
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kurucuspam',
  description: 'taslak', 
  usage: 'kurucu-spam'
};
