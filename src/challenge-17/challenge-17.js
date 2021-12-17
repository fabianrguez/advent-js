export default function countPackages(carriers = [], carrierID) {
  if (typeof carriers === 'undefined' || !carriers) return 0;

  const carrierFound = carriers?.find(([name]) => name === carrierID);
  if (typeof carrierFound !== 'undefined') {
    const [_, numberOfPackages, colleagues] = carrierFound;
    let totalPackages = numberOfPackages || 0;
    if (colleagues) {
      colleagues.forEach((colleague) => {
        const packages = countPackages(carriers, colleague);
        totalPackages += packages;
      });
    }
    return totalPackages;
  }
  return 0;
}
