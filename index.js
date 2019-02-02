const Discord = require('discord.js');
const client = new Discord.Client();
let p = 'b!'

// 0 - Играть, 1 - Стримить, 2 - Слушать, 3 - Смотреть

client.on('ready', () => {
	console.log('Бот успешно запущен!');
	client.user.setActivity(`b!help || ${client.guilds.size} серверов`, {type: 1});
});

client.login(process.env.TOKEN);

client.on('message', message => {
	if(message.channel.type !== `text` || message.author.bot) return;
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
})

client.on('message', (message)=>{
if(message.content == "b!join"){
	message.member.voiceChannel.join()
const embed = new Discord.RichEmbed()
.setDescription("Я присоединился к голосовому каналу.")
.setColor("#42f4aa")
message.channel.send({embed})}
})

client.on('message', msg => {
	if (msg.content === 'b!help') {
	const embed = new Discord.RichEmbed()
	.setAuthor("BeepBot", "https://cdn.discordapp.com/attachments/358311606699950081/541241909201469470/1_7.PNG")
	.addField("Команды", "``b!help`` - помощь.")
	.addField("Создатель", "<@341988428457705482> (``@freezer. ⛧#4232``)")
	.setFooter(`${client.guilds.size} серверов`)
    .setColor("#42f4aa")
    msg.channel.send({embed});
    }
});
