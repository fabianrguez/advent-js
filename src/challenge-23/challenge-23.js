export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  let dictionary = [];
  let canBeDone = true;
  for (let index = 0; index < from.length; index++) {
    const isAlreadyAdded = isCharacterInDictionary(dictionary, to.charAt(index), from.charAt(index));
    if (isAlreadyAdded) {
      canBeDone = false;
    } else {
      dictionary = [...dictionary, [from.charAt(index), to.charAt(index)]];
    }
  }

  return canBeDone;
}
function isCharacterInDictionary(dictionary, to, from) {
  return dictionary.some(([key, value]) => {
    if (value === to) {
      return !(key === from);
    }
    return !!(key === from);
  });
}
