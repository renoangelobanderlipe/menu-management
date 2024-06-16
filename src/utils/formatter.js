const unicodeCurrencyFormatter = {
  PHP: '\u20B1',
  USD: '$',
};

const unicodeCurrency = (currencyCode = 'PHP') => {
  return unicodeCurrencyFormatter[currencyCode] || '';
};

const currencyFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
});

const dateFormatter = new Intl.DateTimeFormat('en-PH', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export { currencyFormatter, dateFormatter, unicodeCurrency };
