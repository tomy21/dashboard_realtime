import React from "react";
import * as XLSX from "xlsx";

const ExportButton = () => {
  const handleExport = async () => {
    try {
      // Panggil API untuk mengekspor data ke Excel
      const response = await fetch("http://localhost:3002/api/export");

      // Logika untuk menangani respon (misalnya, menampilkan pesan atau mengunduh file)
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error("Export failed");
      }
    } catch (error) {
      console.error(error);
      // Logika untuk menangani kesalahan
    }
  };

  return <button onClick={handleExport}>Export to Excel</button>;
};

export default ExportButton;
