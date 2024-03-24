import React, { useState, ChangeEvent } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Player from "../types/Player";

const PlayerComponent = ({player, color } : {player: Player, color: string}) => {
    return (
        <Card sx={{ display: 'flex', minHeight: '5em', minWidth: '10em', backgroundColor: color }} raised={true}>
            <CardContent sx={{ flex: '2 0 auto'}}>
                <Typography component="div" variant="h5" style={{fontWeight: "bold"}}>
                    {player.name}
                </Typography>
                <Typography component="div" variant="h5" style={{fontWeight: "bold"}}>
                    {player.score}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PlayerComponent;
