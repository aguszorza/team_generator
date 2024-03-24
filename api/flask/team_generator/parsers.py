from team_generator.models import Player, Team


def players_parser(players):
    return Team([Player(player["name"], player["score"]) for player in players])
