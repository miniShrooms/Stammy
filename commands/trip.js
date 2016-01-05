function verifyTrip(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
    var output = "";
    if(args.join(' ').trim() == "")
    {
    	args[0] = trip;
    }
    for(var i in bot.data.trips)
    {
    	if(bot.data.trips[i] == args[0])
    	{
    		var output = "Trip valid for user @" + i + "!";
    		break;
    	}
    }
    if(output.length > 0)
    {
        channel.sendMessage(output);
    }
    else
    {
        channel.sendMessage("Trip " + args[0] + " is not registered!");
    }
}


function addTrip(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
    if(!bot.requirePerm(trip))
    {
        channel.sendMessage("You have no permission to add trips");
        return;
    }
    if(args.join(" ").trim() != "" && typeof args[1] != "undefined")
    {
        bot.data.trips[args[0]] = args[1];
        bot.dataupdate();
        channel.sendMessage("@" + nick + " user @" + args[0] + " was added with trip " + args[1] + ".");
    }
}


function remTrip(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
    if(!bot.requirePerm(trip))
    {
        channel.sendMessage("You have no permission to add trips");
        return;
    }
    if(args.join(" ").trim() != "" && typeof args[1] != "undefined")
    {
        delete bot.data.trips[args[0]];
        bot.dataupdate();
        channel.sendMessage("@" + args[0] + "'s trip was successfully removed.");
    }
}


module.exports = {
	verify: verifyTrip,
	tripver: verifyTrip,
  add: addTrip,
  rem: remTrip
};
