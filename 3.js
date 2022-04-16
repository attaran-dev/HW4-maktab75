function BaseNumberConvertor(number, m, n) {
  return parseInt(number, m).toString(n);
}

console.log(
  BaseNumberConvertor(
    +prompt("type a number in the base you are going to input."),
    +prompt("type the base of the number."),
    +prompt("type the base to which you want the number be converted.")
  )
);
