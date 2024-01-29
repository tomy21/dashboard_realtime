import axios from "axios";

export const getSummaryRevenue = async () => {
  try {
    const response = await axios.get(
      "https://api-testing-murex.vercel.app/summary"
    );
    console.log("DataResponse", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melemparkan error agar dapat ditangkap oleh pemanggil fungsi
  }
};
export const getTransactions = async () => {
  try {
    const response = await axios.get(
      "https://api-testing-murex.vercel.app/transactions"
    );
    console.log("responseTransaksi", response.data.payload);
    return response.data.payload;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melemparkan error agar dapat ditangkap oleh pemanggil fungsi
  }
};
export const getSummaryWeekly = async () => {
  try {
    const response = await axios.get(
      "https://api-testing-murex.vercel.app/transaksi/weeklySumary"
    );
    return response.data.payload;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melemparkan error agar dapat ditangkap oleh pemanggil fungsi
  }
};

export const getAllData = async () => {
  try {
    const response = await axios.get("https://api-testing-murex.vercel.app/");
    console.log({ allData: response });
    return response.data.payload;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Melemparkan error agar dapat ditangkap oleh pemanggil fungsi
  }
};
