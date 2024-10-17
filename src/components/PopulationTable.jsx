import React from 'react';

const PopulationTable = ({ data, formatNumber }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tabel Population</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-medium text-gray-600 uppercase tracking-wider"
              >
                Country
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-medium text-gray-600 uppercase tracking-wider"
              >
                Tahun
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-medium text-gray-600 uppercase tracking-wider"
              >
                Populasi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {data.map((item) => (
              <tr key={item.Year}>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600">
                  {item.Nation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600">
                  {item.Year}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600">
                  {formatNumber(item.Population)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopulationTable;
