import React, { useEffect, useState } from "react";
import { getCensusInfo } from "../services/api";

const CensusInfo = () => {
  const [sourceName, setSourceName] = useState("");
  const [sourceDescription, setSourceDescription] = useState("");

  useEffect(() => {
    const fetchCensusInfo = async () => {
      try {
        const info = await getCensusInfo();
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
      <h1 className="text-md md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{sourceName}</h1>
      <p className="text-sm md:text-md lg:text-xl text-gray-600">{sourceDescription}</p>
    </div>
  );
};

export default CensusInfo;
