var ZOOLANDER_QUOTES = 

[
	"They're break-dance fighting!", 
	"Moisture is the essence of wetness, and wetness is the essence of beauty.",
	"Have you ever wondered if there was more to life, other than being really, really, ridiculously good looking? ",
	"Are you an ambi-turner.",
	"But why male models? ... Are you serious? I just told you that a moment ago. ",
	"Cool story Hansel.",
	"What is this? A center for ants? How can we be expected to teach children to learn how to read... if they can't even fit inside the building?",
	"The files are IN the computer?",
	"That Hansel, he's so hot right now!",
	"One Look!? One Look!!? I don't think so!!"
];

/*
	Choose a quote at random
*/
function getRandomQuote()
{
	var randomIndex = Math.floor((Math.random()*ZOOLANDER_QUOTES.length));
	var randomQuote = ZOOLANDER_QUOTES[randomIndex];

	return randomQuote;
}