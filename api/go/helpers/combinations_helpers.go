package helpers

import (
	"gonum.org/v1/gonum/stat/combin"
)

func StructCombinations[T any](list []T, size int) [][]T {
	indexCombinations := combin.Combinations(len(list), size)
	var teams [][]T
	for _, indexTeam := range indexCombinations {
		var team []T
		for _, indexPlayer := range indexTeam {
			team = append(team, list[indexPlayer])
		}
		teams = append(teams, team)
	}
	return teams
}
