export default function getMinJump(obstacles) {
  let jump = 1;
  const maxObstacle = Math.max(...obstacles);
  for (let index = 0; index <= maxObstacle; index += jump) {
    if (obstacles.includes(index)) {
      index = 0;
      jump++;
    }
  }
  return jump;
}
