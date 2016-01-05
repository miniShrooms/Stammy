function displayHelp(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("Stammy, a fast and reliable hack.chat bot by stamsarger.\nCommands: #" + Object.keys(bot.commands).sort().join(", #"));
}


module.exports = {
	help: displayHelp,
	h: displayHelp,
	commands: displayHelp
};
