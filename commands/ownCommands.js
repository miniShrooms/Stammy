function wordCount(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage(args.length);
}
function chatRules(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("Bannable content:\n- Useless content for more than 60 seconds\n" +
"- Spamming other websites or services\n" + "- Links to illegal content in USA\n" +
"- Mod impersonation\n- Identity exposure\n" + 
"Non-bannable content:\n" + 
"- Off-topic discussions\n" +
"- Unpopular opinions, unless they are illegal in the US");
}
function AdvertiseIjs(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("http://exactitudesolutions.com It's great, they've helped me multiple times");
}
function format(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("What do you need help with? Download the ISO of your OS, burn it in a DVD with CDBurnerXP or through Windows itself (or any other programm available on Linux) or simply make a USB using UNetbootin or Rufus. Then change the boot order from within a boot menu or your BIOS and delete the old Windows or Linux partition and reistall the OS. Easy peasy.");
}
function randomGibberish(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage(Math.random().toString(36).substr(2));
}
function sendGtfoAscii(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("  _____ _____ ___  _\n / ___|_   _|  __|/ _ \\| |\n| |  _  | | | |_ | | | | |\n| |_| | | | |  _|| |_| |_|\n \\____| |_| |_|   \\___/(_)");
}
function botTerms(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage('If you use this bot, you accept these terms. I have the right to ban you whenever I want, even if you have not done anything wrong. Also, if you use the spam command multiple times, you are responsible for what happens next. \nEven though you probably haven\'t read the terms because I am a douche, I can always accuse of breaking the terms (even though you haven\'t) and ban you.')
}
function TheWorldsHardestGame(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage('I can\'t even get past the 6th stage >< http://www.addictinggames.com/action-games/theworldshardestgame.jsp');
}
function TalkAbout(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("In this chat, we talk about:\nporn, programming, music, lesbians, shia labeouf, science, school, history, astrophysics, boobs, " +
            "philosophy, geography, opinions, stamsarger's sexuality, geopolitics, Greece's debt, hookers, computer science, " + 
            "web development, food, hack.chat Urban Legend/Creepypasta, whether hack.chat == 4Chan 2.0, and other stuff.");
}
function aboutBot(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("Hack.chat bot by stamsarger. Mods: stamsarger, sean, ToastyStoemp, bacon");
}
function greekAlphabet(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("αβγδεζηθικλμνξοπρστυφχψω\nΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ\nάέήίόύώ\nΆΈΉΊΌΎΏ");
}
function admin(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("Hack.chat admin: vortico\nHack.chat mods: bacon, M4GNV5, Shrooms, ToastyStoemp\nBot admins: stamsarger, sean, ToastyStoemp, bacon");
}
function botSource(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("Bot source will be available in github soon!");
}
function OpinionOnAnonymous(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("We are anomalous. (anomalous in Greek = anonymous)\nWe are region.\nForgive and forget.\nExpecto Patronum.");
}
function learnToCodeLinks(session, bot, channel, cmd, args, nick, text, time, isAdmin, trip)
{
	channel.sendMessage("https://codecademy.com\nhttps://udemy.com");
}
module.exports = {
	wordcount: wordCount,
	rules: chatRules,
	webdev: AdvertiseIjs,
	formathelp: format,
	random: randomGibberish,
	gtfo: sendGtfoAscii,
	terms: botTerms,
	twhg: TheWorldsHardestGame,
	chat: TalkAbout,
	about: aboutBot,
	greek: greekAlphabet,
	admin: admin,
	source: botSource,
	anonymous: OpinionOnAnonymous,
	learntocode: learnToCodeLinks
};
