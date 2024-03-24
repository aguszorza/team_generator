import Team from "./Team";

export default interface Match {
    team_a: Team,
    team_b: Team,
    score_difference: number,
}
