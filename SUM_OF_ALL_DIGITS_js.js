//Sum of  the  all Digites
function SumOfDigites(n) {
  let ans = 0;
  while (n != 0) {
    let reminder = n % 10;
    ans += reminder;
    n = Math.floor(n / 10);
  }
  return ans;
}

console.log(SumOfDigites(1111));
