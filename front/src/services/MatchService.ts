import http from "../http-common";
import Player from "../types/Player";
import Match from "../types/Match";


const generateMatches = (data: Array<Player>) => {
    return http.post<Array<Match>>("/match", {players: data});
};

const MatchesService = {
    generateMatches,
};

export default MatchesService;
