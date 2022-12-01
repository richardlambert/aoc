import { readFile } from 'node:fs/promises';

const toNumberArray = (array) => array.split('\n').map(Number);
const toCaloriesTotal = (calories) => calories.reduce((a, c) => a + c, 0);
const toHighestCaloriesTotal = (a, c) => (c > a ? c : a);
const highestToLowest = (a, b) => b - a;

try {
  const input = await readFile('./day-one-input.txt', 'utf-8');
  const caloriesPerElf = input.split('\n\n').map(toNumberArray);
  const caloriesTotalPerElf = caloriesPerElf.map(toCaloriesTotal).sort(highestToLowest);
  const highestCaloriesTotal = caloriesTotalPerElf.reduce(toHighestCaloriesTotal, 0);
  const topThreeHighestCaloriesTotal = toCaloriesTotal(caloriesTotalPerElf.slice(0, 3));
  console.log(`highest total calories 👉 ${highestCaloriesTotal}`);
  console.log(`top three total calories 👉 ${topThreeHighestCaloriesTotal}`);
} catch (error) {
  console.error(error);
}
