function cookie(session, bot, channel, cmd, args, nick, text, time, isadmin, trip)
{
	if(args.join(" ").trim() != '')
	{
		channel.sendMessage("@" + nick + " mercifully hands some cookiez to @" + args[0]);
	}
	else
	{
		channel.sendMessage("@" + nick + ' EATS COOKIEZ! OM NOM NOM NOM NOM');
	}
}

module.exports = {
	cookie: cookie
};
