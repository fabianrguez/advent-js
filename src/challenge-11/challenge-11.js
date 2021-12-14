const TICKET_PRICE = 12;
const FIDELITY_CARD_PRICE = 250;
const FIDELITY_DISCOUNT = 0.75;

export default function shouldBuyFidelity(times) {
    const normalTicketsPrice = TICKET_PRICE * times;
  let fidelityCardPrice = FIDELITY_CARD_PRICE;

  for (let index = 1; index <= times; index++) {
    const discountTimes = Array(index).fill(FIDELITY_DISCOUNT);
    const ticketDiscount = discountTimes.reduce((acc, item) => acc * item, TICKET_PRICE);
    fidelityCardPrice += ticketDiscount;
  }
  return normalTicketsPrice > fidelityCardPrice;
}