function isObject(object) {
  return object != null && typeof object === 'object';
}

export default function checkIsSameTree(treeA, treeB) {
  const keysA = Object.keys(treeA);
  const keysB = Object.keys(treeB);

  if (keysA.length !== keysB.length) {
    return false;
  }
  return keysA
    .map((key) => {
      const val1 = treeA[key];
      const val2 = treeB[key];
      const areObjects = isObject(val1) && isObject(val2);
      return !((areObjects && !checkIsSameTree(val1, val2)) || (!areObjects && val1 !== val2));
    })
    .every((entry) => entry);
}
