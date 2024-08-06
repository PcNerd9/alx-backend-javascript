import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
    const budget = getBudgetObject(income, gdp, capita);
    const fullBudget = {
        ...budget,
        getIncomeInDollars(income) {
            return `$${income}`;
        },

        getIncomeInEuroes(income) {
            return `${income} euros`;
        },
    };

    return fullBudget;

}