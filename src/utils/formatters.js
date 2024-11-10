export const formatLocation = location => {
  const [country, city] = location.split(', ').map(part => part.trim());
  return `${city}, ${country}`;
};

export const formatPrice = (price, locale = 'uk-UA') => {
  return price.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
