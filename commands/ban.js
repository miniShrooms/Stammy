function botBan(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	if(!bot.requirePerm(trip) || args.join(" ").trim() == "")
	{
		channel.sendMessage("@" + nick + " you don't have the right to use this command");
		return;
	}
	if(typeof args[0] == "undefined")
	{
		channel.sendMessage("@" + nick + " pick someone to ban");
		return;
	}
	for(var i = 0; i < args.length; i++)
	{
		bot.data.banned[String(Object.keys(bot.data.banned).length)] = args[0];
		
	}
	channel.sendMessage("@" + nick + " user(s) " + args.join(" ") + " just got banned from using this bot.");
	bot.dataupdate();
}
function botUnban(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	if(!bot.requirePerm(trip) || args.join(" ").trim() == '')
	{
		channel.sendMessage("@" + nick + " you don't have the right to use this command");
		return;
	}
	if(typeof args[0] == "undefined")
	{
		channel.sendMessage("@" + nick + " pick someone to unban");
		return;
	}
	for(var i = 0; i < args.length; i++)
	{
		bot.ardel(bot.data.banned, args[i]);
	}
	bot.dataupdate();
	channel.sendMessage("@" + nick + " user(s) " + args.join(" ") + " can use this bot again!");
}
module.exports = {
	botban: botBan,
	botunban: botUnban
};
