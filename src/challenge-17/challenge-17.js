export default function countPackages(carriers = [], carrierID) {
  if (typeof carriers === 'undefined' || !carriers) return 0;

  const [_, numberOfPackages, colleagues] = carriers?.find(([name]) => name === carrierID);
  let totalPackages = numberOfPackages || 0;
  if (colleagues) {
    colleagues.forEach((colleague) => {
      const packages = countPackages(carriers, colleague);
      totalPackages += packages;
    });
  }
  return totalPackages;
}
