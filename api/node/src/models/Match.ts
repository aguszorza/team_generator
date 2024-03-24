import Team from "./Team";

export default class Match {
    team_a: Team;
    team_b: Team;
    score_difference: number;

    constructor(team_a: Team, team_b: Team) {
        this.team_a = team_a
        this.team_b = team_b
        this.score_difference = Math.abs(team_a.score - team_b.score)
    }
}
