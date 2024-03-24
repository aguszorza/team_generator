class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __hash__(self):
        return hash(self.name)

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name

    def serialize(self):
        return {"name": self.name, "score": self.score}


class Team:
    def __init__(self, players):
        self.players = set(players)
        self.score = sum(map(lambda player: player.score, players))

    def __iter__(self):
        return iter(self.players)

    def __len__(self):
        return len(self.players)

    def sub_team(self, other_team):
        return Team(self.players.difference(other_team.players))

    def serialize(self):
        return {
            "players": [player.serialize() for player in self.players],
            "score": self.score
        }


class Match:
    def __init__(self, team_a, team_b):
        self.team_A = team_a
        self.team_B = team_b
        self.score_difference = abs(team_a.score - team_b.score)

    def __lt__(self, other):
        return self.score_difference < other.score_difference

    def serialize(self):
        return {
            "team_a": self.team_A.serialize(),
            "team_b": self.team_B.serialize(),
            "score_difference": self.score_difference
        }
