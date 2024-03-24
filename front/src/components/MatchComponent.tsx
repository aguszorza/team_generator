import React, { useState, ChangeEvent } from "react";
import Typography from '@mui/material/Typography';

import Box from "@mui/material/Box";
import Match from "../types/Match";
import TeamComponent from "./TeamComponent";


const MatchComponent = (match: Match) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography component="div" variant="h5" style={{fontWeight: "bold"}}>
                Score Difference: {match.score_difference}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"center", pl: 1, pb: 1 }}>
                <TeamComponent  team={match.team_a} teamName="Team A" color="red" />
                <h1>Vs</h1>
                <TeamComponent team={match.team_b} teamName="Team B" color="blue"/>
            </Box>
        </Box>
    );
};

export default MatchComponent;
