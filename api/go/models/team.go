package models

type Team struct {
	Players []Player `json:"players"`
	Score   int      `json:"score"`
}

func NewTeam(players []Player) Team {
	score := 0
	for _, player := range players {
		score += player.Score
	}
	return Team{Players: players, Score: score}
}
