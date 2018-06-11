const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!!"

client.on('ready', () => {
  client.user.setGame('!!help ', 'https://www.twitch.tv/zzstefanro321/') 
})   

   client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(0xff0000)
   message.channel.sendEmbed(embed);
  }

});

  client.on('message', message => {    
    if(message.content.startsWith('!!mass')) {
    if(message.author.id === "320887181516210177" ||
message.author.id === "320887181516210177"){
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
    if (msg.content === '!!invite') {
      msg.channel.send('Invite **** https://discordapp.com/api/oauth2/authorize?client_id=455810114679734272&permissions=8&scope=bot**  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === '!!support') {
      msg.channel.send('https://discord.gg/rB2822H');
    }
  });

client.on('message', msg => {
    if (msg.content === '!!info') {
      msg.channel.send('▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬
:arrow_down:                      DESPRE NOI:                      :arrow_down:
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
:hammer_pick:️ Staff responsabil si de treaba :hammer_pick:
:busts_in_silhouette: Staff si membrii activi :busts_in_silhouette:
:performing_arts: O gramadada de role-uri :performing_arts:
:tada:O sa facem giveaways  :tada: 
:sunglasses: O gramada de emoji-uri :sunglasses:
:shield: Este unul dintre cele mai sigure servere din romania
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
:small_blue_diamond: Peste 200 membri
:small_orange_diamond: Server ul a fost facut acum ceva timp
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
De ce inca citesti asta?
Intra acum!
:fire:  AVEM NEVOIE DE TINE :fire:
:crown: https://discord.gg/yKrUK8w :crown:'); 
    }
  });

client.on('message', msg => {
    if (msg.content === '!!help') {
      msg.channel.send('`? Commands ?` , !!invite , !!support , !!info');
    }
  });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🙋𝖂elcome-𝕲oodbye🙅');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome !', `${member} Bine ai venit pe server
Speram sa te distrezi alaturi de noi. Si nu uita sa citesti :beginner:𝕽ules:beginner:-ul`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.BOT_TOKEN)
