//  [
//   0: number of packets,
//   1: route start,
//   2: route end
// ]

export default function canCarry(capacity, trip) {
  // ¡No olvides compartir tu solución en redes!
  const route = trip.reduce(
    (acc, [numberOfPackets, routeStart, routeEnd]) =>
      (acc = {
        ...acc,
        start: [...acc.start, routeStart],
        end: [...acc.end, routeEnd],
        packets: { ...acc.packets, [+routeStart]: numberOfPackets },
      }),
    { start: [], end: [], packets: [] }
  );
  let canCarryAll = true;
  let carryPackets = 0;
  for (let index = Math.min(...route.start); index <= Math.max(...route.end); index++) {
    if (canCarryAll) {
      if (carryPackets > 0 && route.end.includes(index)) {
        carryPackets -= +route.packets[index];
        carryPackets < 0 && (carryPackets = 0);
      }
      if (route.start.includes(index)) {
        carryPackets += +route.packets[index];
      }

      if (carryPackets > capacity) {
        canCarryAll = false;
      }
    }
  }
  return canCarryAll;
}
