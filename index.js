const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "l!"

client.on('ready', () => {
  client.user.setGame('l!help ', 'https://www.twitch.tv/zzstefanro321')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> l!
BOT COMMANDS
• || l!mass || l!support || l!info || l!say || l!ping || l!serverinfo || l!restart || l!invite || l!botinfo || `)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '419472407816830986') {
    if (message.content.startsWith(`e!restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', 'Light', true)
  embed.addField('Prefix', 'l!', true)
  embed.addField('Tag:', '0571', true)
  embed.addField('Created at:', '2018-07-04', true)
  embed.addField('ID', '464146143182454794', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', 'zZstefan', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});    
   
  client.on('message', message => {    
    if(message.content.startsWith('e!mass')) {
    if(message.author.id === "271360404641284096" ||
message.author.id === "271360404641284096"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === 'l!invite') {
      msg.channel.send('Invite **Light** https://discordapp.com/api/oauth2/authorize?client_id=464146143182454794&permissions=8&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'l!support') {
      msg.channel.send('**Support server ---> https://discord.gg/7uz683J**');
    }
  });

client.on('message', msg => {
    if (msg.content === 'l!info') {
      msg.channel.send('**My creator is zZstefan if you want to watch on YouTube Here`s a link:** ** https://www.youtube.com/channel/UCe3cJzGyLmIvqp0fj5PHwew?view_as=subscriber **');
    }
  });

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '|| 𝕰lite Membru ||');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', '➤welcome-goodbye');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `Bun venit pe Light Network. :tada::hugging: !`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '➤welcome-goodbye');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `**A Parasit Server-ul :slight_frown:**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
