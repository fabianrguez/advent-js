export default function wrapGifts(gifts) {
  if (gifts.length === 0) return [];
  let edge;
  const wrap = gifts.map((gift) => {
    edge = `*${Array(gift.length).fill('*').join('')}*`;
    return `*${gift}*`;
  });
  wrap.unshift(edge);
  wrap.push(edge);
  return wrap;
}
