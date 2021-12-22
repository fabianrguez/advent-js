export default function countDecorations(bigTree) {
  let acc = 0;
  Object.entries(bigTree).forEach(([key, value]) => {
    if (key === 'value') {
      acc += value;
    } else {
      value && (acc += countDecorations(value));
    }
  });
  return acc;
}
