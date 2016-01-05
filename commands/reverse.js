function reverseArgs(session, bot, channel, cmd, args, nick, text, time, isadmin, trip)
{
	var reversed = args.join(" ").split("").reverse().join("");
	channel.sendMessage(reversed);
}

module.exports = {
	reverse: reverseArgs
};
