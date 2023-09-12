import axios from "axios";

export default axios.create({
  baseURL: "https://stackoverflowbackend-xmm8.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});