module.exports = {
  format_date: (date) => {
    // Create an array of month names
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    // Create a new date object from the provided date
    const d = new Date(date);
    // Return the formatted date
    return `${monthNames[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
  },
};
