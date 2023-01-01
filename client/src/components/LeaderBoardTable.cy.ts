import LeaderBoardTable from "./LeaderBoardTable.vue";
import { msToElapsedString } from "../misc/StringUtils";

const results = [
  {
    id: 7,
    username: "Joseph",
    totalTimeMilliseconds: 123456,
  },
  {
    id: 10,
    username: "Franz",
    totalTimeMilliseconds: 654321,
  },
  {
    id: 7,
    username: "Joseph",
    totalTimeMilliseconds: 789456,
  },
  {
    id: 23,
    username: "Someone else",
    totalTimeMilliseconds: 798956,
  },
];

const propsList = [
  {
    title: "This is a testing title for Franz",
    currentUserId: 10,
    results: results,
  },
  {
    title: "This is a testing title for Joseph",
    currentUserId: 7,
    results: results,
  },
];

describe("<LeaderBoardTable />", () => {
  for (const props of propsList) {
    it("renders", () => {
      // see: https://test-utils.vuejs.org/guide/
      cy.mount(LeaderBoardTable, { props: props });
      cy.get("h4.title").should("contain.text", props.title);
      cy.get("tbody tr")
        .then((rows) => rows.length)
        .should("equal", props.results.length);
      cy.get("tr th.rank").should("contain.text", "#");
      cy.get("tr th.username").should("contain.text", "Name");
      cy.get("tr th.time").should("contain.text", "Time");
      for (let i = 0; i < results.length; i++) {
        const res = results[i];
        const match =
          res.id === props.currentUserId ? "have.class" : "not.have.class";
        cy.get(`tr.row-${i + 1}`).should(match, "is-selected");
        cy.get(`tr.row-${i + 1} td.rank`).should("contain.text", i + 1);
        cy.get(`tr.row-${i + 1} td.username`).should(
          "contain.text",
          res.username
        );
        cy.get(`tr.row-${i + 1} td.time`).should(
          "contain.text",
          msToElapsedString(res.totalTimeMilliseconds)
        );
      }
    });
  }
});
