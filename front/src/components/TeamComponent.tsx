import React from "react";

import Team from "../types/Team";
import Box from "@mui/material/Box";
import PlayerComponent from "./PlayerComponent";


const TeamComponent = ({team, color, teamName} : {team: Team, color: string, teamName: string}) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', border: '3px solid black', borderRadius: 3, margin: "5em" }} >
            <h1>{teamName} ({team.score})</h1>
            {team.players.map((player) => {
                return (
                    <div style={{margin: "1em"}} key={player.name}>
                        <PlayerComponent player={player} color={color}/>
                    </div>
                );
            })}
        </Box>
    );
};

export default TeamComponent;
