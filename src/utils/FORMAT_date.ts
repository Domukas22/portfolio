//
//
//

export default function FORMAT_date(date: string | undefined) {
  const newDate = new Date(date || "");

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date as 'day month-name, year'
  return newDate.toLocaleDateString("en-US", options);
}
