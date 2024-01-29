import React, { useEffect, useState } from "react";

const YourComponent = () => {
  const [dateTimeString, setDateTimeString] = useState("");
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    // Konversi string tanggal menjadi objek Date
    const dateTimeObject = new Date(dateTimeString);

    // Mengambil komponen waktu
    const hours = dateTimeObject.getHours();
    const minutes = dateTimeObject.getMinutes();
    const seconds = dateTimeObject.getSeconds();

    // Format waktu ke dalam string (misal: "02:44:09")
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Setel formattedTime ke dalam state
    setFormattedTime(formattedTime);
  }, [dateTimeString]);

  return (
    <div>
      <p>Formatted Time: {formattedTime}</p>
    </div>
  );
};

export default YourComponent;
