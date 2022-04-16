function string_chop(string, number) {
  let result = [];
  let i = 0;
  do {
    result.push(string.split(' ').join('').slice(i, i+number));
    i += number;
  } while (i <= string.length);
  return result;
}
console.log(string_chop(prompt("Enter a string:"),+prompt("Enter a number:")))
