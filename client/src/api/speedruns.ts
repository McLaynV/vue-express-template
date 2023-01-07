import { instance } from "./index";
import {
  SpeedrunCreateRequest,
  SpeedrunData,
} from "../../../shared/models/speedrun-data";
import { PATH_SPEEDRUN_SUBMIT_SUFFIX } from "../../../shared/constants";

export async function getSpeedruns(userId?: number): Promise<SpeedrunData[]> {
  const response = await instance.get(`/${userId ?? ""}`);
  return response.data;
}

export async function submitSpeedrun(
  body: SpeedrunCreateRequest
): Promise<SpeedrunData> {
  const response = await instance.post(PATH_SPEEDRUN_SUBMIT_SUFFIX, body);
  return response.data;
}
