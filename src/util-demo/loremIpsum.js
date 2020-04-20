const { LoremIpsum, loremIpsum } = require('lorem-ipsum');

/*
	TODO
		count
* * */

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4,
	},
	wordsPerSentence: {
		max: 16,
		min: 4,
	},
});

console.log(lorem.generateWords(1));
console.log('- -');
console.log(lorem.generateSentences(5));
console.log('- -');
console.log(lorem.generateParagraphs(7));
console.log('- -');
console.log(loremIpsum({ count: 3, format: 'html' }));
