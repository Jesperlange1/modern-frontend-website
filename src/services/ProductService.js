import axios from "axios";

const apiClient = axios.create({
  baseURL: window.location.href.replace("#", ""),
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents() {
    return apiClient.get("/db.json");
  }
};
