import LeaderBoard from "./LeaderBoard.vue";
import { SpeedrunData } from "../../../shared/models/speedrun-data";
import {
  PATH_SPEEDRUN_SUBMIT,
  PATH_SPEEDRUNS,
} from "../../../shared/constants";

const propsList = [
  {
    username: "Alice",
    totalTime: 42069,
  },
  {
    username: "Bob",
    totalTime: 69,
  },
  {
    username: "Carl",
    totalTime: 42,
  },
  {
    username: "Carl",
    totalTime: 6513218,
  },
  {
    username: "Bob",
    totalTime: 2348,
  },
  {
    username: "Bob",
    totalTime: 108,
  },
];

const users: string[] = [];

function selectSpeedruns(userId?: number) {
  const result =
    userId === undefined
      ? Array.from(data)
      : data.filter((d) => d.userId == userId);
  result.sort((a, b) => {
    if (a.totalTimeMilliseconds < b.totalTimeMilliseconds) return 1;
    if (a.totalTimeMilliseconds === b.totalTimeMilliseconds) return 0;
    return -1;
  });
  return result;
}

function registerUser(username: string): number {
  const index = users.indexOf(username);
  if (index >= 0) return index;
  users.push(username);
  return users.length - 1;
}

const data: SpeedrunData[] = [];

function registerSpeedrunData(speedrun: SpeedrunData): SpeedrunData {
  // TODO: race condition
  data.push(speedrun);
  speedrun.id = data.length - 1;
  return speedrun;
}

describe("<LeaderBoard />", () => {
  for (const props of propsList) {
    const userId = registerUser(props.username);
    const bodySpeedrunsSubmit: SpeedrunData = {
      id: -1,
      totalTimeMilliseconds: props.totalTime,
      userId: userId,
      username: props.username,
    };
    registerSpeedrunData(bodySpeedrunsSubmit);
    it(`renders ${props.username}`, () => {
      cy.intercept(
        {
          method: "GET",
          url: `${PATH_SPEEDRUNS}/`,
        },
        {
          statusCode: 200,
          body: selectSpeedruns(),
        }
      ).as("getSpeedrunsAll");

      cy.intercept(
        {
          method: "GET",
          url: `${PATH_SPEEDRUNS}/${userId}`,
        },
        {
          statusCode: 200,
          body: selectSpeedruns(userId),
        }
      ).as(`getSpeedrunsById_${userId}`);

      cy.intercept(
        {
          method: "POST",
          url: `${PATH_SPEEDRUN_SUBMIT}`,
        },
        {
          statusCode: 201,
          body: bodySpeedrunsSubmit,
        }
      ).as("postSpeedrunsSubmit");

      cy.mount(LeaderBoard, { props: props });
      cy.get("h2.title").should("contain.text", `${props.username}'s time:`);

      cy.wait([
        "@getSpeedrunsAll",
        `@getSpeedrunsById_${userId}`,
        "@postSpeedrunsSubmit",
      ]);
    });
  }
});
