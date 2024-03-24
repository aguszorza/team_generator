"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    constructor(players) {
        this.players = players;
        this.score = 0;
        this.players.map(player => {
            this.score += player.score;
        });
    }
}
exports.default = Team;
//# sourceMappingURL=Team.js.map