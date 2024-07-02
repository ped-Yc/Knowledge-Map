// 质数大于1
function isPrime(n) {
  // 质数大于1
  if (n <= 1) return false;
  // 在n^2 到(n+1)^2间必有质数
  for (let i = 2; i * i <= n + 1; i++) {
    
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}