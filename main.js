var HackChat = require("./hackchat.js");
var chat = new HackChat();
var channelName = "programming";
var botName = "Stammy";
var channel = chat.join(channelName, botName);
var fs = require("fs");
var path = require("path");
var bot = {};
bot.commands = {};
bot.data = require("./data.json");
bot.messages = [];
bot.dataupdate = function()
{
	fs.writeFileSync("data.json", JSON.stringify(bot.data, undefined, 4));
}
bot.choose = function(arr)
{
	channel.sendMessage(arr[Math.round(Math.random() * (arr.length - 1))]);
}
bot.ardel = function(ar, del) 
{
	var a = ar.indexOf(del);
	ar = ar.splice(a, 1);
}
bot.substr = function(arr, radix)
{
	var result = [];
	for(var i = radix; i < arr.length; i++)
	{
		result.push(arr[i]);
	}
	return result;
}
bot.requirePerm = function(trip)
{
    if(bot.data.mods.indexOf(trip) != -1)
    {
    	return true;
    }
    return false;
}
fs.readdir("./commands", function(err, files)
{
	if(err)
	{
		throw err;
	}

	for(var i = 0; i < files.length; i++)
	{
		if(path.extname(files[i]) == ".js")
		{
			var cmds = require("./commands/" + files[i]);
			if(typeof cmds != "object")
			{
				throw "Invalid command " + files[i];
			}
			for(var k in cmds)
			{
				if(typeof cmds[k] != "function")
				{
					throw "Invalid command " + files[i];
				}
				bot.commands[k] = cmds[k];
			}
		}
	}

    function parseCmd(session, nick, text, time, isAdmin, trip)
    {
    	var msg = nick + ": " + text;
    	console.log(msg);
    	bot.messages.push(msg);
    	for(var i in bot.data.banned)
    	{
    		if(bot.data.banned[i] === nick)
    		{
    			return;
    		}
    	}
    	if(nick != botName && nick.toLowerCase().indexOf("bot") === -1)
    	{
    		if(bot.data.afks.hasOwnProperty(nick) && text.indexOf("#") !== 0)
    		{
    			if(!bot.data.afks[nick].hasOwnProperty("trip") || bot.data.afks[nick].trip == trip)
    			{
    				if(bot.data.afks[nick].who.length > 0)
    				{
    					channel.sendMessage("@" + nick + " is back! @" + nick + ", you got these messages while AFK:\n" + bot.data.afks[nick].who.join("\n"));
    				}
    				else
    				{
    				    channel.sendMessage("@" + nick + " is back!");
    				}
    				delete bot.data.afks[nick];
    				bot.dataupdate();
    			}
    			
    		}
    		if(text.indexOf("@") !== -1)
    		{
    			for(var i in bot.data.afks) 
    			{
                    if(text.indexOf(i) == (text.indexOf("@") + 1) && nick != i) 
                    {
                        out("@" + i + " is AFK " + bot.data.afks[i].reason);
                        if(bot.data.afks[i].who.indexOf(nick) == -1) 
                        {
                        	bot.data.afks[i].who.push(msg);
                        	bot.dataupdate();
                        }
                    }
                }
    		}
    		if(text[0] == "#")
    		{
    			var args = text.substr(1).split(" ");
    			var cmd = args[0].toLowerCase();
    			var args = args.slice(1).join(" ").trim().split(" ");
    			if(typeof bot.commands[cmd] == "function" && bot.commands.hasOwnProperty(cmd))
    			{
    				bot.commands[cmd](session, bot, channel, cmd, args, nick, text, time, isAdmin, trip);
    			}
    		}
    	}
    }
    chat.on("chat", function(session, nick, text, time, isAdmin, trip)
    {
    	parseCmd(session, nick, text, time, isAdmin, trip);
    });
    chat.on("info", function(session, text, time)
    {
    	var not = "*** " + text + " ***"
 		  console.log(not);
    });
    chat.on("onlineAdd", function(session, nick, time)
    {
    	var not = "*** " + nick + " joined ***";
    	console.log(not);
    });
    chat.on('onlineRemove', function(session, nick, time)
    {
    	var not = "*** " + nick + " left ***";
    	console.log(not);
    });
});
