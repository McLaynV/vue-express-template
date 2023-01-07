import axios from "axios";
import { PATH_SPEEDRUNS } from "../../../shared/constants";

const instance = axios.create({
  baseURL: `${PATH_SPEEDRUNS}/`,
  timeout: 10000,
});

export { instance };
