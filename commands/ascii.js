var ascii = require("figlet");

function makeAsciiArt(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	if(!bot.requirePerm(trip))
	{
		channel.sendMessage("@" + nick + " you have no right to use this command");
		return;
	}
	var text = args.join(" ");
	ascii(text, function(err, data)
	{
		if(err)
		{
			channel.sendMessage("@" + nick + " an unexpected error occurred! Unable to make ascii art :(");
			return;
		}
		channel.sendMessage(data);
	});
}

module.exports = {
	ascii: makeAsciiArt
};
