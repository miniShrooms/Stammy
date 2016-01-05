function afk(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	if(bot.data.afks.hasOwnProperty(nick))
	{
		bot.data.afks[nick].reason = args.join(" ");
		return;
	}
	bot.data.afks[nick] = {
		reason: args.join(" "),
		who: []
	};
	if(trip.length > 5)
	{
		bot.data.afks[nick].trip = trip;
	}
	bot.dataupdate();
	channel.sendMessage("@" + nick + " is now AFK " + bot.data.afks[nick].reason);
}

module.exports = {
	afk: afk
};
