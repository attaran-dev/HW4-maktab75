function findIndexOfWords(sentence, word){
    let wordsArr = sentence.split(' ');
    let wordsIndex = [0];
    let foundIndexInWordsArr = [];
    sentence.forEach((space, i) => space === ' ' ? wordsIndex.push(i+1): null)
    result = [];
    for (const i of wordsArr) {
        if (i===word){
            foundIndexInWordsArr.push(indexOf(i))
        }
        
    }
    for (const j of foundIndexInWordsArr) {
        result.push(wordsIndex[j])
    }
}

console.log(findIndexOfWords(prompt("Type a sentence."), prompt("Type the word you want to search the index(es) of.")))