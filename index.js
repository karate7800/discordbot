
//https://discordapp.com/api/oauth2/authorize?client_id=415909619060178945&permissions=0&scope=bot
const botconfig = require("./botconfig.json");
const package = require("./package.json");
const Discord = require("discord.js");
const packagelock = require("./package-lock.json");
const bot = new Discord.Client({disableEveryone: true});


bot.login(process.env.botconfig.token);
bot.on("ready", async () => {
console.log(`${bot.user.username} is online!`);
bot.user.setActivity("Illegal Poker");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]; 
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`) {
        return message.channel.send("Hi dude or dudette or dudit");
        return message.channel.send("Getting rid of gendeR assumptioN fornever");
    }
    if(cmd === `${prefix}marijuana`) {
        return message.channel.send("Do it it is beautiful");
    } else if(cmd === `${prefix}roastme`) {
        return message.channel.send("You stupid");
    }
    if(cmd === `${prefix}aops`) {
        return message.channel.send("Please go jump off of a cliff");
    }
    if(cmd === `${prefix}art of problem solving`) {
        return message.channel.send("Go jump off a cliff NOW!!!!");
    }
    if(cmd === `${prefix}why`) {
        return message.channel.send("Stop insulting the purest form of dirty savagery");
    }
    if(cmd === `${prefix}tomato`) {
        return message.channel.send("How dare you insult the mighty cucumber");
    }
    if(cmd === `${prefix}stop`) {
    return message.channel.send("FASTER!!!!!!!");
    }
    if(cmd === `${prefix}dude`) {
        return message.channel.send("ARE YOU ASSUMING MY GENDER??????");
    }
    if(cmd === `${prefix}no`) {
        return message.channel.send("OF COURSE!!! HOW DARE YOU SUGGEST SOMETHING SO PREPOSTEROUS!!??");
    }
    if(cmd === `${prefix}chill`) {
        return message.channel.send("NEVER!!!!!!!");
    }
    if(cmd === `${prefix}dan`) {
        return message.channel.send("WHAT DO YOU WANT FROM ME????");
    }
    if(cmd === `${prefix}yes`) {
        return message.channel.send("NOOOOOOOOO!!!!!!");
    }
    if(cmd === `${prefix}cucumber`) {
        return message.channel.send("YOU THINK YOU HAVE THE RIGHT TO ASSUME THAT CUCUMBERS ARE BETTER THAN TOMATOS???")
    }
    if(cmd === `${prefix}bye`) {
        return message.channel.send("Thank god you're leaving");
    }
   if(cmd === `${prefix}lmao`) {
       return message.channel.send("What ass?");
   }
   if(cmd === `${prefix}lol`)  {
        return message.channel.send("This is a server with no comedy, amusement, also and is a server of grammar good");
   }
    if(cmd === `${prefix}wolf`) {
        return message.channel.send("Leave me alone!!!");
    }   
    if(cmd === `${prefix}haha`) {
        return message.channel.send("Ho!");
    }
     if(cmd === `${prefix}wtf`) {
         return message.channel.send("Where the fuck?  In your pants, obviously");
     }   
     if(cmd === `${prefix}omg`) {
         return message.channel.send("What right do you have to talk about God when you were a mistake?");
     }
     if(cmd === `${prefix}owner`) {
        
             return message.channel.send("Do not dare disturb the overlord!!!, ".username());
        
     } 
    if(cmd === `${prefix}role`) {
       
        return message.channel.send("Welcome, hopeless Savage ");
       
    }
    if(cmd === `${prefix}when`) {
        return message.channel.send("NEVER!!");
    }
    if(cmd === `${prefix}rich`) {
        return message.channel.send("Yes, I am rich");
    }    








    });
