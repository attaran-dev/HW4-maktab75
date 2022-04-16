const names = [{name: "Ali", family: "Ziaei"}, {name: "AmirAli" , family: "Gharib"},{name: "Hossein" , 
family: "Rahimi"}]
function findPerson(fLetter, lLetter) {
    result = [];
    for (const i of names) {
        if (i["name"][0] === fLetter.toLowerCase() && i["name"][-1] === lLetter.toLowerCase()) {
result.push(i)
        }
    }
    return result;
}
console.log(findPerson(prompt('Type the first letter.'), prompt('Type the last letter.')))