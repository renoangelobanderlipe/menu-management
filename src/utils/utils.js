const exportToCsv = (data, filename = 'table_data.csv') => {
  const rows = [Object.keys(data[0]).join(','), ...data.map((item) => Object.values(item).join(','))];

  const csvContent = rows.join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const calculateProgressColor = (amountInStock) => {
  const percentageInStock = (amountInStock / 100) * 100;

  if (percentageInStock === 0) return 'red';
  if (percentageInStock <= 25) return 'pink';
  if (percentageInStock <= 50) return 'yellow';
  if (percentageInStock <= 75) return 'blue';
  return 'green';
};

const handleExport = (data, fileName) => {
  exportToCsv(data, fileName);
};

export { exportToCsv, calculateProgressColor, handleExport };
