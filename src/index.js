module.exports = function reverse (n) {
  if (n > 0) {
    let arr = n.toString().split('').reverse();
    let str = arr.join('');
    return +str;
  } else if (n < 0) {
    let num = n * (-1);
    let arr = num.toString().split('').reverse();
    let str = arr.join('');
    return +str;
  } else if (n === 0) {
    return 0;
  }
}
