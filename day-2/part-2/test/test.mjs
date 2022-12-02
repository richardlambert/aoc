import assert from 'assert';
import { scoreFromStrategy } from '../solution.mjs';

const scoreMap = { A: { X: 3, Y: 4, Z: 8 }, B: { X: 1, Y: 5, Z: 9 }, C: { X: 2, Y: 6, Z: 7 } };
const strategy = './test/test-input.txt';
const roundDelim = '\n';
const statsDelim = ' ';

describe('scoreFromStrategy()', () => {
  it("return a scrore of 12 given an input of 'A Y\\nB X\\nC Z'", async () => {
    const score = await scoreFromStrategy(strategy, roundDelim, statsDelim, scoreMap);
    assert.equal(score, 12);
  });
});
