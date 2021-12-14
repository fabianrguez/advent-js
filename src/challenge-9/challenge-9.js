export default function groupBy(collection, it) {
  if (typeof it === 'undefined') return collection;

  return collection
    .map((item) => {
      const group = typeof it === 'function' ? it(item) : item[it];
      return [item, group];
    })
    .reduce((obj, [item, group]) => {
      const groupMutation = obj.hasOwnProperty(group) ? [...obj[group], item] : [item];
      return { ...obj, [group]: groupMutation };
    }, {});
}
