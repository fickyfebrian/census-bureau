import React, { useEffect, useState } from "react";
import { getCensusInfo } from "../services/api"; // Import API dari services

const CensusInfo = () => {
  const [sourceName, setSourceName] = useState("");
  const [sourceDescription, setSourceDescription] = useState("");

  useEffect(() => {
    const fetchCensusInfo = async () => {
      try {
        const info = await getCensusInfo();  // Menggunakan fungsi API
        setSourceName(info.source_name);
        setSourceDescription(info.source_description);
      } catch (error) {
        console.error("Error fetching census info:", error);
      }
    };

    fetchCensusInfo();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{sourceName}</h1>
      <p className="text-lg text-gray-600">{sourceDescription}</p>
    </div>
  );
};

export default CensusInfo;
