"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Match {
    constructor(team_a, team_b) {
        this.team_a = team_a;
        this.team_b = team_b;
        this.score_difference = Math.abs(team_a.score - team_b.score);
    }
}
exports.default = Match;
//# sourceMappingURL=Match.js.map