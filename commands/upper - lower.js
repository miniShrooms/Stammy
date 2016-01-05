function upper(session, bot, channel, cmd, args, nick, text, time, isadmin, trip)
{
	channel.sendMessage("@" + nick + " output: " + args.join(" ").toUpperCase());
}
function lower(session, bot, channel, cmd, args, nick, text, time, isadmin, trip)
{
	channel.sendMessage("@" + nick + " output: " + args.join(" ").toLowerCase());
}
module.exports = {
	upper: upper,
	lower: lower
};
