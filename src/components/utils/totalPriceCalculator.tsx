

export const totalPriceCalculator = (price_before_vat: number, vat: number): string => {
    return price_before_vat
        ? (price_before_vat * (1 + vat / 100)).toFixed(2)
        : "0";
};
