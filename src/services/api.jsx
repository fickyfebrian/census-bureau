// services/api.jsx
export const getPopulationData = async () => {
  try {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching population data:", error);
    throw error;
  }
};

export const getCensusInfo = async () => {
  try {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const result = await response.json();
    return result.source[0].annotations;
  } catch (error) {
    console.error("Error fetching census info:", error);
    throw error;
  }
};
