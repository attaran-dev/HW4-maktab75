function encryptStr(str, num) {
  let arrStr = str.split("");
const encStr = arrStr.map((e, i, a) =>
    a[i] !== " " ? a[i + num].codePointAt() : " "
  );
  return encStr;
}

console.log(encryptStr(prompt('Enter a string to divide it by the number you put next.'), +prompt('Enter a number by which you want the string be divided.')))
