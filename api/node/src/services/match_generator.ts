import Player from "../models/Player";
import Team from "../models/Team";
import Match from "../models/Match";


const iter = require('itertool-js')

export const generate_matches = async (players: Array<Player>): Promise<Array<Match>> => {
    const combinations = iter.combinations_custom(players, players.length >> 1)
    const matches: Array<Match> = []
    Array.from(Array(combinations.length >> 1).keys()).map(i => {
        const team_a: Team = new Team(combinations[i])
        const team_b: Team = new Team(combinations[combinations.length - 1 - i])
        const match = new Match(team_a, team_b)
        matches.push(match)
    })
    return matches
};
