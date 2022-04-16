let zero = new Number(0);
if (zero) {
 alert( "zero is truthy!?!" );
}
// "zero is truthy!?!" will be alerted, because the value of zero here is an object, not 0, and thus zero is true.