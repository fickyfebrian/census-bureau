import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PopulationTable from "./PopulationTable";
import FilterData from "./FilterData";
import CensusInfo from "./CensusInfo";
import { getPopulationData } from "../services/api";

const PopulationCharts = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startYear, setStartYear] = useState(2013);
  const [endYear, setEndYear] = useState(2022);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const populationData = await getPopulationData();
        const sortedData = populationData.sort(
          (a, b) => parseInt(a.Year) - parseInt(b.Year)
        );
        setData(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const year = parseInt(item.Year);
      return year >= startYear && year <= endYear;
    });
    setFilteredData(filtered);
  }, [data, startYear, endYear]);

  const handleYearChange = (type, value) => {
    if (type === "start") {
      setStartYear(parseInt(value));
    } else {
      setEndYear(parseInt(value));
    }
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full h-full flex flex-col">
        {/* Dashboard Title */}
        <CensusInfo />

        {/* Main Content */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column: Line Chart and Pie Chart */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Line Chart Section */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex-grow">
              <div className="h-[350px] p-7">
                <LineChart data={filteredData} />
              </div>
            </div>

            {/* Pie Chart Section */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex-grow">
              <div className="h-[350px] p-12">
                <PieChart data={filteredData} />
              </div>
            </div>
          </div>

          {/* Right Column: Filter and Population Table */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-4">
            {/* Filter Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FilterData
                data={data}
                startYear={startYear}
                endYear={endYear}
                handleYearChange={handleYearChange}
              />
            </div>

            {/* Population Table Section */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex-grow">
              <div className="flex-grow overflow-auto">
                <PopulationTable data={data} formatNumber={formatNumber} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulationCharts;