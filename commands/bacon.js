function bacon1(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	if(args.join(" ").trim() == "")
	{
	    channel.sendMessage("@" + nick + " is going to eat bacon, but he has run out of it. @" + nick + " weeps quietly.");
	}
	else
	{
		channel.sendMessage("@" + nick + " slaps @" + args[0] + " with bacon. Ouch!");
	}
}

module.exports = {
	bacon: bacon1
};
