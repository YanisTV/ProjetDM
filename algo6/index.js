export function table5(nb, limit=10) {
  const results = []
  for (let i = 1; i <= limit; i++) {
    results.push(`${nb}*${i}=${nb*i}`);
  }
  return results
}
