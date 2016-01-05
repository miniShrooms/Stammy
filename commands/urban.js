var request = require("request");

function urbanReq(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	if(typeof args[0] == "undefined")
	{
		channel.sendMessage("@" + nick + " you must choose a term first!");
		return;
	}
	var term = encodeURIComponent(args.join(" "));
	var link = 'http://api.urbandictionary.com/v0/define?term=' + term;
	request(link, function(err, res, body)
	{
		if(err)
		{
			channel.sendMessage("@" + nick + " an error occurred! " + err.toString());
		}
		var data = JSON.parse(body);
		if(!data.list || data.list.length < 1)
		{
			channel.sendMessage("@" + nick + " no results found! :(");
			return;
		}
		var definition = data.list[0].definition.substr(0, 500);
		channel.sendMessage("@" + nick + " " + definition + " - " + data.list[0].permalink);
	});
}

module.exports = {
	urban: urbanReq
};
