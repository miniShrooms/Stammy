function Game(session, bot, channel, cmd, args, nick, text, time, isadmin, trip)
{
	var rps = {
        rock: ["Rock. It's a tie!", "Scissors. Rock wins!", "Paper. Paper wins!"],
        paper: ["Rock. Paper wins!", "Scissors. Scissors wins!", "Paper. It's a tie!"],
        scissors: ["Rock. Rock wins!", "Scissors. It's a tie!", "Paper. Scissors wins!"]
	};
  bot.choose(rps[cmd]);
}

module.exports = {
	rock: Game,
	paper: Game,
	scissors: Game
};
