const numbers =
[900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50, 0];
// not a great sort... ¯\_(ツ)_/¯
const sleepSort = function(nums) {
  for (const num of nums) {
    setTimeout(() => console.log(num), num);
  }
}

sleepSort(numbers);