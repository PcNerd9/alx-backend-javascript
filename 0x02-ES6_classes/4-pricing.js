import Currency from "./3-currency.js";

export default class Pricing {
	constructor(amount, currency) {
		if (typeof amount !== 'number') {
			throw new TypeError("Amount must be a number");
		};

		if (!(currency instanceof Currency)) {
			throw new TypError("Currency must a currency");
		};

		this._amount = amount;
		this._currency = currency;
	};

	get amount() {
		return this._amount;
	};

	get currency() {
		return this._currency;
	};

	set amount(value) {
		if (typeof value !== "number") {
			throw new TypeError("Amount must be number");
		};
		this._amount = value;
	};

	set currency(obj) {
		if (!(obj instanceof Currency)) {
			throw new TypeError("Currency must be currency");
		};
		this._currency = obj;
	};

	displayFullPrice() {
		return `${this._amount} ${this._currency.name} (${this._currency.code})`;
	};

	convertPrice(amount, conversionRate) {
		return amount * conversionRate;
}
