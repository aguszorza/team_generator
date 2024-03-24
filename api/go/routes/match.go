package routes

import (
	"encoding/json"
	"go/app"
	"go/helpers"
	"go/models"
	"net/http"
	"sort"
)

type PlayersInput struct {
	Players []models.Player `json:"players"`
}

func GenerateMatch(w http.ResponseWriter, r *http.Request) {
	var players PlayersInput
	json.NewDecoder(r.Body).Decode(&players)

	list := app.GenerateMatches(players.Players)

	sort.SliceStable(list, func(i, j int) bool {
		return list[i].ScoreDifference < list[j].ScoreDifference
	})

	var possibleMatches []models.Match
	for index := 0; index < helpers.Min(len(list), 5); index++ {
		possibleMatches = append(possibleMatches, list[index])
	}

	json.NewEncoder(w).Encode(possibleMatches)
}
