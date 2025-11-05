export function countriesData(countries) {
  return {
    size: countries.length,
    population: countries.reduce((a, b) => a + b)
  }
}
