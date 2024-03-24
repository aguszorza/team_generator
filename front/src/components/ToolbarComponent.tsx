import React, { useState, ChangeEvent } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom'
// import Link from '@mui/material/Link';

import Box from "@mui/material/Box";

const ToolbarComponent = () => {
    return (
        <AppBar position="sticky">
                <Toolbar >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 2,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Match Maker
                    </Typography>
                    <Button color="inherit" href="/match">Generate</Button>
                    <Button color="inherit" href="/" >Other</Button>
                </Toolbar>
        </AppBar>
    );
};

export default ToolbarComponent;
