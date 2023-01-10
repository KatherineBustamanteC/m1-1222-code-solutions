/* exported countdown */
function countdown(number) {
  var countDownArray = [];
  for (let i = number; i >= 0; i--) {
    countDownArray.push(i);
  } return countDownArray;
}
