export function randomFind(search) {
  let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
  return  arr.includes(search);
}
