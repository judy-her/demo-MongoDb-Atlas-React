// we could name this export anything like "dateString"

exports.dateToString = () => {
  const now = new Date();
  // Extract year, month, and day
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0
  const day = String(now.getDate()).padStart(2, '0');

  // Extract hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Convert hours to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12; // Convert 0 to 12

  // Format the time
  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Combine date and time
  const formattedDate = `${year}-${month}-${day} ${formattedTime}`;

  return formattedDate;
};
