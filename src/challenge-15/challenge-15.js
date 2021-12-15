export default function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let areJumpsOkey = true;
  const maxHeight = Math.max(...heights);
  let isMaxHeightAchieved = false;
  let isGoingDown = false;

  for (let index = 1; index < heights.length; index++) {
    if (!isMaxHeightAchieved && heights[index] > heights[index - 1]) {
      areJumpsOkey = true;
    } else if (isMaxHeightAchieved && heights[index] > heights[index - 1]) {
      areJumpsOkey = false;
    } 
    if (isMaxHeightAchieved && heights[index] < heights[index - 1]) {
      isGoingDown = true;
    }

    if (heights[index] === heights[index - 1]) {
      areJumpsOkey = false;
      index = heights.length;
    }

    if (heights[index] === maxHeight) {
      isMaxHeightAchieved = true;
    }
  }
  return areJumpsOkey && isGoingDown;
}
