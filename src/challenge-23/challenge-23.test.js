import canReconfigure from './challenge-23';

describe("[challenge-23] - Can you reconfigurate factories to don't stop create gifts?", () => {
  test('from BAL to LIB', () => {
    const canBeDone = canReconfigure('BAL', 'LIB');
    expect(canBeDone).toBeTruthy();
  });
  test('from CON to JUU', () => {
    const canBeDone = canReconfigure('CON', 'JUU');
    expect(canBeDone).toBeFalsy();
  });
  test('from MMM to MID', () => {
    const canBeDone = canReconfigure('MMM', 'MID');
    expect(canBeDone).toBeFalsy();
  });
  test('from AA to MID', () => {
    const canBeDone = canReconfigure('AA', 'MID');
    expect(canBeDone).toBeFalsy();
  });
  test('from xxxMMM to aaaDDD', () => {
    const canBeDone = canReconfigure('xxxMMM', 'aaaDDD');
    expect(canBeDone).toBeTruthy();
  });
});
