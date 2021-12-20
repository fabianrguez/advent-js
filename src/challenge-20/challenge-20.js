const ALPHABET = 'abcdefghijklmnñopqrstuvwxyz';

export default function pangram(letter) {
  const normalizedLetter = [...letter]
    .map((character) => {
      if (character === 'ñ') return character;

      return character
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    })
    .join('');

  return [...ALPHABET].every((character) => normalizedLetter.includes(character));
}
