// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100

const DICTIONARY = {
  '.': 1,
  ',': 5,
  ':': 10,
  ';': 50,
  '!': 100,
};

const areSymbolsValid = (symbols) => symbols.every((symbol) => DICTIONARY.hasOwnProperty(symbol));

export default function decodeNumber(symbols) {
  if (!areSymbolsValid([...symbols])) return NaN;

  let lastValue = '';
  return [...symbols].reduce((acc, symbol, index) => {
    const currentValue = DICTIONARY[symbol];
    if (index === 0) {
      acc = currentValue;
    } else if (currentValue > lastValue) {
      acc += (currentValue - lastValue) - lastValue;
    } else {
      acc += currentValue;
    }
    lastValue = DICTIONARY[symbol];

    return acc;
  }, 0);
}
