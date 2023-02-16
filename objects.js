'use strict';

// 1. countWords
function countWords(phrase) {
  let wordCounts = {};
  let phraseList = phrase.split(" ");

  for (let word of phraseList) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    }
    else {
      wordCounts[word] = 1;
    }
  } 
  return wordCounts
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  
}
