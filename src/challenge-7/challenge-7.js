export default function contains(store, product) {
  return Object.entries(store).some(([_, element]) =>
    typeof element === 'object' 
    ? contains(element, product) 
    : element === product
  )
}