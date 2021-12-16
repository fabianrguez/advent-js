export default function createXmasTree(height) {
  const leafs = [height]
    .map((row) =>
      Array(row)
        .fill('')
        .map((_, index) =>
          [
            ...Array(height - 1 - index).fill('_'),
            ...Array(1 + index * 2).fill('*'),
            ...Array(height - 1 - index).fill('_'),
          ].join('')
        )
        .join('\n')
    )
    .join('');

  const base = [2]
    .map((row) =>
      Array(row)
        .fill('')
        .map((_) => [...Array(height - 1).fill('_'), '#', ...Array(height - 1).fill('_')].join(''))
        .join('\n')
    )
    .join('');

  return `${leafs}\n${base}`
}