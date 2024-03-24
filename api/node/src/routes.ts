import express, { Request, Response } from "express";
import Player from "./models/Player";
import { generate_matches } from "./services/match_generator";
import Match from "./models/Match";

export const matchRouter = express.Router();

matchRouter.post("/match", async (req: Request, res: Response) => {
    try {
        console.log("Starting process")
        const d1 = new Date()
        const players: Array<Player> = req.body?.players || [];
        const matches: Array<Match> = await generate_matches(players);
        const possible_teams: Array<Match> = []

        matches.sort((match_a, match_b) => {
            if (match_a.score_difference < match_b.score_difference) {
                return -1
            }
            return 1
        })

        Array.from(Array(Math.min(5, matches.length)).keys()).map(i => {
            possible_teams.push(matches[i])
        })
        const d2 = new Date()
        const time_elapsed = d2.getTime() - d1.getTime();
        console.log("time spent: ", time_elapsed)

        res.status(201).json(possible_teams);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
