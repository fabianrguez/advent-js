function isCombinationChecked(combination, combinations) {
  if (combinations.length === 0) {
    return false;
  }

  let isChecked = false;
  combinations.forEach((element) => {
    combination.forEach((comb) => {
      isChecked = element.includes(comb);
    });
  });
  return isChecked;
}

export default function sumPairs(numbers, result) {
  let solution = null;
  let combinations = [];
  for (let index = 0; index < numbers.length; index++) {
    for (let j = 0; j < numbers.length; j++) {
      if (index !== j) {
        if (!isCombinationChecked([numbers[index], numbers[j]], combinations)) {
          combinations.push([numbers[index], numbers[j]]);
          if (solution == null && numbers[index] + numbers[j] === result) {
            solution = [numbers[index], numbers[j]];
          }
        }
      }
    }
  }
  return solution;
}