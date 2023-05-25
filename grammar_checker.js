let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
// console.log(storyWords);

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// correct unnecessary word
let count = 0;
storyWords.forEach((element)=>{
  count++;
});
console.log(count);
storyWords = storyWords.filter(word=>word != unnecessaryWord);

// correct misspelled word
storyWords = storyWords.map(word=>word === misspelledWord? "beautiful": word);

// replace bad word
let badWordIndex = storyWords.findIndex(word => word === badWord);
console.log(badWordIndex);
storyWords[badWordIndex] = 'really';

// check length of each word
let lengthCheck = storyWords.every(word=>word.length < 10);
console.log(lengthCheck);

// replace to word which length is not more than 10
let longWords = storyWords.filter(word => word.length > 10);
console.log(longWords);
storyWords = storyWords.map((word) => word === longWords[0] ? "stunning" : word);

// log final story
console.log(storyWords.join(' '));
