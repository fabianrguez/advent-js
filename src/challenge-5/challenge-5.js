export default function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const xmasDate = new Date('Dec 25, 2021')
  const timeDifference = xmasDate.getTime() - date.getTime() 
  const daysTo = Math.ceil(timeDifference / (1000 * 3600 * 24))
  
  return daysTo;
}