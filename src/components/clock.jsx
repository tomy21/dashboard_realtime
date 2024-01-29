import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);
  const formattedDate = () => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Intl.DateTimeFormat("id-ID", options).format(currentTime);
  };

  return <div>{formattedDate()}</div>;
};

export default Clock;
