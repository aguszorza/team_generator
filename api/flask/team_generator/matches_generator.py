import itertools
from team_generator.models import Team, Match


def generate_matches(players):
    combinations = list(itertools.combinations(players, len(players) // 2))
    matches = []
    for i in range(len(combinations) // 2):
        team_a = Team(combinations[i])
        team_b = Team(combinations[len(combinations) - 1 - i])
        match = Match(team_a, team_b)
        matches.append(match)
    return matches
