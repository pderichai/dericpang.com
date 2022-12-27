import { parseISO, format } from "date-fns";

// Accepts an ISO date string and returns the date in Month Day, Year format
// e.g. July 13, 1996.
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
