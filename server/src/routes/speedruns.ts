import { Request, Response, Router } from "express";
import {
  SpeedrunCreateRequest,
  SpeedrunData,
} from "../../../shared/models/speedrun-data";
import { SpeedrunEntity } from "../db/speedrun-entity";
import { UserEntity } from "../db/user-entity";
import { PATH_SPEEDRUN_SUBMIT_SUFFIX } from "../../../shared/constants";

const PARAM_ID = "id";

const router = Router();

router.get(`/:${PARAM_ID}?`, getMultipleSpeedruns);
router.post(PATH_SPEEDRUN_SUBMIT_SUFFIX, submitSpeedrun);

/**
 * Get top 10 speedruns
 */
async function getMultipleSpeedruns(
  request: Request,
  response: Response<SpeedrunData[]>
) {
  const results = await SpeedrunEntity.findAll({
    limit: 10,
    order: [["totalTimeMilliseconds", "ASC"]],
    ...(request.params[PARAM_ID] && {
      where: { userId: request.params[PARAM_ID] },
    }),
  });
  response.send(results.map((result) => result.get({ plain: true })));
}

/**
 * Submit a run
 */
async function submitSpeedrun(
  request: Request<{}, {}, SpeedrunCreateRequest>,
  response: Response<SpeedrunData>
) {
  const [userInstance] = await UserEntity.findOrCreate({
    where: { username: request.body.username },
  });

  const newSpeedrunInstance = await SpeedrunEntity.create({
    userId: userInstance.id,
    username: request.body.username,
    totalTimeMilliseconds: request.body.totalTimeMilliseconds,
  });

  // If user does not exist, create it

  response.send(newSpeedrunInstance.get({ plain: true }));
}

export default router;
