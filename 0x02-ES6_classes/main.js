import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
p.amount = 300;
p.currency = new Currency("$", "Dollar");
console.log(p.displayFullPrice());
console.log(Pricing.convertPrice(100, 2));

