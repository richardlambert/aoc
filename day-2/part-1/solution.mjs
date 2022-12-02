import { readFile } from 'node:fs/promises';

//    | X         | Y         | Z
// ---|-----------|-----------|-----------
//  A | 1 + 3 = 4 | 2 + 6 = 8 | 3 + 0 = 3
// ---|-----------|-----------|-----------
//  B | 1 + 0 = 1 | 2 + 3 = 5 | 3 + 6 = 9
// ---|-----------|-----------|-----------
//  C | 1 + 6 = 7 | 2 + 0 = 2 | 3 + 3 = 6

const scoreMap = { A: { X: 4, Y: 8, Z: 3 }, B: { X: 1, Y: 5, Z: 9 }, C: { X: 7, Y: 2, Z: 6 } };
const strategy = './input.txt';
const roundDelim = '\n';
const statsDelim = ' ';

export async function scoreFromStrategy(strategy, roundDelim, statsDelim, scoreMap) {
  try {
    return (await readFile(strategy, 'utf-8'))
      .split(roundDelim)
      .map((_) => _.split(statsDelim))
      .map(([a, b]) => scoreMap[a][b])
      .reduce((a, c) => a + c, 0);
  } catch (error) {
    console.error(error);
  }
}

console.log(await scoreFromStrategy(strategy, roundDelim, statsDelim, scoreMap));
