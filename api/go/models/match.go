package models

import "go/helpers"

type Match struct {
	TeamA           Team `json:"team_a"`
	TeamB           Team `json:"team_b"`
	ScoreDifference int  `json:"score_difference"`
}

func NewMatch(teamA Team, teamB Team) Match {
	scoreDifference := helpers.Abs(teamB.Score - teamA.Score)
	return Match{TeamA: teamA, TeamB: teamB, ScoreDifference: scoreDifference}
}
