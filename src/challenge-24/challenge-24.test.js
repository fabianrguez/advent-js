import checkIsSameTree from './challenge-24';

describe('[challenge-24] - Comparing chritsmas tree', () => {
  const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  };
  const tree2 = {
    value: 1,
    left: { value: 4, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
  };
  const tree3 = {
    value: 1,
    left: { value: 3, left: { value: 1, left: null, right: null }, right: { value: 2, left: null, right: null } },
    right: { value: 5, left: { value: 1, left: null, right: null }, right: { value: 2, left: null, right: null } },
  };
  test('tree and tree2', () => {
    const areEqual = checkIsSameTree(tree, tree2);
    expect(areEqual).toBeFalsy();
  });
  test('tree and tree', () => {
    const areEqual = checkIsSameTree(tree, tree);
    expect(areEqual).toBeTruthy();
  });
  test('tree2 and tree2', () => {
    const areEqual = checkIsSameTree(tree2, tree2);
    expect(areEqual).toBeTruthy();
  });
  test('tree3 and tree3', () => {
    const areEqual = checkIsSameTree(tree3, tree3);
    expect(areEqual).toBeTruthy();
  });
  test('tree3 and tree2', () => {
    const areEqual = checkIsSameTree(tree3, tree2);
    expect(areEqual).toBeFalsy();
  });
});
