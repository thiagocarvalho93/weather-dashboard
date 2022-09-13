import api from "./api";

const getThreeDays = async (station) => {
  try {
    const response = await api.get(
      `3day?apiKey=e1f10a1e78da46f5b10a1e78da96f525&stationId=${station}&numericPrecision=decimal&format=json&units=m`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getThreeDays,
};
