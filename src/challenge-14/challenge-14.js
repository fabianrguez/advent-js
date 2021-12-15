export default function missingReindeer(ids) {
  let lost = -1;
  ids
    .sort((a, b) => a - b)
    .forEach((id, index) => {
      if (index !== id && lost === -1) {
        lost = index;
      }
    });
  return lost === -1 ? ids[ids.length - 1] + 1 : lost;
}
