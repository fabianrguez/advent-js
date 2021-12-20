export default function learn(time, courses) {
  let coursesIndex = [0, 0];
  let maxAmountOfTime = 0;

  for (let index = 0; index < courses.length; index++) {
    for (let k = 0; k < courses.length; k++) {
      if (index !== k) {
        const amountOfTime = courses[index] + courses[k];
        if (amountOfTime > maxAmountOfTime && amountOfTime <= time) {
          maxAmountOfTime = amountOfTime;
          coursesIndex = [index, k];
        }
      }
    }
  }
  return maxAmountOfTime !== 0 ? coursesIndex : null;
}
