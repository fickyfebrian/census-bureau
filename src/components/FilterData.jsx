import React from "react";

const FilterData = ({ data, startYear, endYear, handleYearChange }) => {
  return (
    <div className="rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Filter Data</h2>
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <label className="block text-2xl font-medium text-gray-700 mb-1">
            Tahun Awal:
          </label>
          <select
            value={startYear}
            onChange={(e) => handleYearChange("start", e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md"
          >
            {data.map((item) => (
              <option key={`start-${item.Year}`} value={item.Year}>
                {item.Year}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-auto">
          <label className="block text-2xl font-medium text-gray-700 mb-1">
            Tahun Akhir:
          </label>
          <select
            value={endYear}
            onChange={(e) => handleYearChange("end", e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md"
          >
            {data.map((item) => (
              <option key={`end-${item.Year}`} value={item.Year}>
                {item.Year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterData;
