const constants = {
  baseUrl: 'http://localhost:8000/api/'
}

const renderHTML = (htmlString: string) => {
  return { __html: htmlString };
};

const formatCurrency = (price: number) => {
  return price.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });
}

export { renderHTML, formatCurrency, constants };