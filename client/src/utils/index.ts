// Format a date into readable format (e.g., 10 Jul 2025)
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-KE", options);
};

// Capitalize first letter 
export const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

// Format currency in Kenyan Shillings (KES)
export const formatCurrency = (amount: number): string =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(amount);

// text to a certain length
export const truncate = (text: string, maxLength = 100): string =>
  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
