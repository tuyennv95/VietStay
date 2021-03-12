import axios from "axios";

import { BASE_API } from "../Constants/index";

const http = axios.create({
  baseURL: "http://localhost:1337",
});

export default http;