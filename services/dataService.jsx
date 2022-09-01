import api from "./api";

const getAll = async () => {
  try {
    const response = await api.get("/data");
    return response;
  } catch (error) {
    return error.response;
  }
};

const getById = async (id) => {
  try {
    const response = await api.get(`/data/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  getById,
};
