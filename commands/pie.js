function pie(session, bot, channel, cmd, args, nick, text, time, isadmin, trip)
{
	if(args.join(" ").trim() != "")
	{
		channel.sendMessage("@" + nick + " throws pie right at @" + args[0] + "'s face! Ouch!");
	}
	else
	{
		channel.sendMessage("@" + nick + " fills his face with PIE!");
	}
}


module.exports = {
	pie: pie
};
