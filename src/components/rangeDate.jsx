import React, { useEffect, useState } from "react";
import { format, subDays } from "date-fns";

function DateRangeComponent() {
  const [dateRange, setDateRange] = useState("");

  useEffect(() => {
    const currentDate = new Date();

    const sevenDaysAgoDate = subDays(currentDate, 7);
    const result = `${format(sevenDaysAgoDate, "dd MMM yy")} s/d ${format(
      currentDate,
      "dd MMM yy"
    )}`;

    setDateRange(result);
  }, []);

  return <div>{dateRange}</div>;
}

export default DateRangeComponent;
