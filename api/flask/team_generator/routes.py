from team_generator import app
from team_generator.parsers import players_parser
from team_generator.matches_generator import generate_matches
from flask import jsonify, request


@app.route('/match', methods=["POST"])
def generate_combinations():
    players = request.json.get("players", [])
    players = players_parser(players)

    matches = generate_matches(players)
    matches.sort()

    possible_teams = []
    for i in range(min(5, len(matches))):
        possible_teams.append(matches[i].serialize())

    return jsonify(possible_teams)
