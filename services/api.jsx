import axios from "axios";

const api = axios.create({
  baseURL: "https://api.weather.com/v2/pws/observations/all/",
});

export default api;