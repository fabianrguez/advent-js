export default function learn(time, courses) {
  let coursesIndex = [0, 0];
  let maxAmountOfTime = 0;

  courses.forEach((course, courseIndex, items) => {
    items.forEach((item, itemIndex) => {
      if (itemIndex !== courseIndex) {
        const amountOfTime = course + item;
        if (amountOfTime > maxAmountOfTime && amountOfTime <= time) {
          maxAmountOfTime = amountOfTime;
          coursesIndex = [courseIndex, itemIndex];
        }
      }
    });
  });

  return maxAmountOfTime !== 0 ? coursesIndex : null;
}
