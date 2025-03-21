//Nth fibonaci no

function NthFibonaciNo(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let ans = a + b;
    console.log(ans);
    a = b;
    b = ans;
  }
}
NthFibonaciNo(5);

// 0 1 1 2 3 5
