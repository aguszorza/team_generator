"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchRouter = void 0;
const express_1 = __importDefault(require("express"));
const match_generator_1 = require("./services/match_generator");
exports.matchRouter = express_1.default.Router();
exports.matchRouter.post("/match", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log("Starting process");
        const d1 = new Date();
        const players = ((_a = req.body) === null || _a === void 0 ? void 0 : _a.players) || [];
        const matches = yield (0, match_generator_1.generate_matches)(players);
        const possible_teams = [];
        matches.sort((match_a, match_b) => {
            if (match_a.score_difference < match_b.score_difference) {
                return -1;
            }
            return 1;
        });
        Array.from(Array(Math.min(5, matches.length)).keys()).map(i => {
            possible_teams.push(matches[i]);
        });
        const d2 = new Date();
        const time_elapsed = d2.getTime() - d1.getTime();
        console.log("time spent: ", time_elapsed);
        res.status(201).json(possible_teams);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
//# sourceMappingURL=routes.js.map