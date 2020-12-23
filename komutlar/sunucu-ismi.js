const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let Asreaper = args.slice(0).join(' ');
  
  if(!Asreaper) return message.channel.send('Lütfen Bir Sunucu İsmi Belirt!')
  
  
  message.guild.setName(Asreaper)
  message.react('😈')
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["sunucuisim"], 
  permLevel: 0
};

exports.help = {
  name: 'sunucu-ismi',
  description: 'taslak', 
  usage: 'sunucu-ismi'
};
