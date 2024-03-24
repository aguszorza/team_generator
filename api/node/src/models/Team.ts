import Player from "./Player";

export default class Team {
    players: Array<Player>;
    score: number;

    constructor(players: Array<Player>) {
        this.players = players;
        this.score = 0;
        this.players.map(player => {
            this.score += player.score
        })
    }
}
