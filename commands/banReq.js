function banReq(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	if(args[0] == "status")
	{
		if(!bot.data.toBan.hasOwnProperty(args[1]))
		{
			return;
		}
		if(args[0].length === 0)
		{
			args[0] = nick;
		}
		var result = "";
		var reasons = {
			yes: [],
			no: []
		};
		for(var i in bot.data.toBan[args[1]].yes.why)
		{
			if(bot.data.toBan[args[1]].yes.why[i].length > 0)
			{
				reasons.yes.push(i + ": " + bot.data.toBan[args[1]].yes.why[i]);
			}
		}
		for(var i in bot.data.toBan[args[1]].no.why)
		{
			if(bot.data.toBan[args[1]].no.why[i].length > 0)
			{
				reasons.no.push(i + ": " + bot.data.toBan[args[1]].no.why[i]);
			}
		}
		result += "Ban status for @" + args[0] + ":\n    Yes: " + user.yes.counter + " " + user.yes.nicks.join(", ") + "\n        ";
        result += "Reasons:\n            " + reasons.yes.join("\n            ") + "\n    ";
        result += 'No: ' + user.no.counter + " " + user.no.nicks.join(", ") + "\n        ";
        result += "Reasons:\n            " + reasons.no.join("\n            ");
        channel.sendMessage(result);
	}
	if(["yes", "no"].indexOf(args[0]) == -1)
	{
		return;
	}
	var hi = false;
	for(var i in bot.data.trips)
	{
		if(data.trips[i] == trip)
		{
			var hi = true;
			break;
		}
	}
	if(hi)
	{
		if(!bot.data.toBan.hasOwnProperty(args[1]))
		{
			function C()
			{
				this.why = {};
				this.counter = 0;
				this.nicks = [];
			}
			bot.data.toBan[args[1]] = {
				yes: new C(),
				no: new C()
			};
		}
		if(args[0] == "yes")
		{
			var a = "no";
		}
		if(args[0] == 'no')
		{
			var a = "yes";
		}
		if(bot.data.toBan[args[0]][a].nicks.indexOf(nick) != -1)
		{
			bot.ardel(bot.data.toBan[args[1]][a].nicks, nick);
			bot.data.toBan[args[1]][a].counter--;
			delete data.toBan[args[1]][a].why[nick];
		}
		if(bot.data.toBan[args[1]][arsgs[0]].nicks.indexOf(nick) == -1)
		{
			bot.data.toBan[args[1]][args[0]].nicks.push(nick);
		}
		bot.data.toBan[args[1]][args[0]].why[nick] = bot.substr(args, 2).join(" ");
	}
	else
	{
		channel.sendMessage("Your tripcode is not verified. Ask @stamsarger to add you.");
	}
	bot.dataupdate();
}

module.exports = {
	ban: banReq
};
