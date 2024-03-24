package app

import (
	"go/helpers"
	"go/models"
)

func GenerateMatches(players []models.Player) []models.Match {
	combinations := helpers.StructCombinations(players, len(players)/2)
	var matches []models.Match
	for index := 0; index < len(combinations)/2; index++ {
		teamA := models.NewTeam(combinations[index])
		teamB := models.NewTeam(combinations[len(combinations)-1-index])
		match := models.NewMatch(teamA, teamB)
		matches = append(matches, match)
	}

	return matches
}
