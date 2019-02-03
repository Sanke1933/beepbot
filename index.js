    const Discord = require('discord.js');
    const client = new Discord.Client();
    let p = 'b!';

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
    });

    client.on('message', async message => {
        if (message.content === `${p}serverinfo`) {
            if (message.channel.guild.region === "russia") {
                message.channel.guild.region = "Россия";
            }
            let d = message.member.joinedAt; 
            let timen = d.toLocaleString();
            const embed = new Discord.RichEmbed()
                .setTitle(`Информация о сервере ${message.channel.guild.name}`)
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setThumbnail(message.channel.guild.iconURL)
                .setColor("#e3caa0")
                .addField('Вы присоединились к серверу', timen)
                .addField('Количество пользователей', message.channel.guild.memberCount)
                .addField('Количество каналов', message.channel.guild.channels.size)
                .addField('Количество ролей',message.channel.guild.roles.size)
                .addField('Регион сервера', message.channel.guild.region);
            await message.channel.send(embed);
            message.react("✅");
        }

        if (message.content.startsWith(`${p}avatar`)) {
            let userok = message.mentions.users.first();
            if (!userok)
                userok = message.author;    

            const embed = new Discord.RichEmbed()
                .setDescription(`Аватар пользователя ${userok}`)
                .setImage(`${userok.avatarURL}`)
                .setColor("#e3caa0");
            await message.channel.send(embed);
            message.react("✅");
        }

        if (message.content === `${p}help`) {
            const embed = new Discord.RichEmbed()
                .setAuthor("BeepBot", "https://cdn.discordapp.com/attachments/358311606699950081/541241909201469470/1_7.PNG")
                .addField("Информация", "``b!serverinfo`` - информация о сервере.\n``b!avatar`` - украсть аватарку пользователя.")
                .addField("Бот", "<@341988428457705482> (``@freezer. ⛧#4232``) - главный разработчик.(идея, бот, аватарка, код)\n<@421030089732653057> (``zziger#8040``) - второй разработчик.(код)")
                .setFooter(`${client.guilds.size} серверов`)
                .setColor("#e3caa0");
            await message.channel.send(embed);
            message.react("✅");
        };
    });
