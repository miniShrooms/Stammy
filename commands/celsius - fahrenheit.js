function CelsiusToFahrenheit(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	args[0] = parseFloat(args[0]);
	if(String(args[0]) == "NaN" || String(args[0]) == "undefined")
	{
		channel.sendMessage("Could not process");
	}
	else
	{
		channel.sendMessage(args[0] + " Celsius are " + (args[0] * 1.8 + 32) + " Fahrenheit.");
	}
}

function fahrenheitToCelsius(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	args[0] = parseFloat(args[0]);
	if(String(args[0]) == "NaN" || String(args[0]) == "undefined")
	{
		channel.sendMessage("Could not process");
	}
	else
	{
		channel.sendMessage(args[0] + " Fahrenheit are " + ((args[0] - 32) / 1.8) + " Celsius.")
	}
}

module.exports = {
	celsius: CelsiusToFahrenheit,
	fahrenheit: fahrenheitToCelsius
};
