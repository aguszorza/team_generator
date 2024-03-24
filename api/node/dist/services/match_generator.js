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
exports.generate_matches = void 0;
const Team_1 = __importDefault(require("../models/Team"));
const Match_1 = __importDefault(require("../models/Match"));
const iter = require('itertool-js');
const generate_matches = (players) => __awaiter(void 0, void 0, void 0, function* () {
    const combinations = iter.combinations_custom(players, players.length >> 1);
    const matches = [];
    Array.from(Array(combinations.length >> 1).keys()).map(i => {
        const team_a = new Team_1.default(combinations[i]);
        const team_b = new Team_1.default(combinations[combinations.length - 1 - i]);
        const match = new Match_1.default(team_a, team_b);
        matches.push(match);
    });
    return matches;
});
exports.generate_matches = generate_matches;
//# sourceMappingURL=match_generator.js.map