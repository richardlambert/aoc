import assert from 'assert';
import { scoreFromStrategy } from '../solution.mjs';

const scoreMap = { A: { X: 4, Y: 8, Z: 3 }, B: { X: 1, Y: 5, Z: 9 }, C: { X: 7, Y: 2, Z: 6 } };
const strategy = './test/test-input.txt';
const roundDelim = '\n';
const statsDelim = ' ';

describe('scoreFromStrategy()', () => {
  it("return a scrore of 15 given an input of 'A Y\\nB X\\nC Z'", async () => {
    const score = await scoreFromStrategy(strategy, roundDelim, statsDelim, scoreMap);
    assert.equal(score, 15);
  });
});
