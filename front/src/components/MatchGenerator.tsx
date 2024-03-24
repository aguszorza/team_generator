import React, { useState, ChangeEvent } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import MatchComponent from "./MatchComponent";
import Match from "../types/Match";
import PlayerInputComponent from "./PlayerInputComponent";

const MatchGenerator: React.FC = () => {
    const [matches, setMatches] = useState<Array<Match>>([]);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    return (
        <div style={{ margin: '2em'}}>
            <h1>Matches</h1>
            <PlayerInputComponent setMatches={setMatches} />
            {matches.length > 0 ?
                <Box sx={{ width: '100%'}}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {matches.map((match:Match, index) =>{
                                return(
                                    <Tab label={"Option " + (index + 1)} key={index}  />
                                )
                            })}
                        </Tabs>
                    </Box>
                    {matches.map((match:Match, index) =>{
                        return(
                            <TabPanel value={value} index={index} key={"match_" + index}>
                                <MatchComponent {... match} />
                            </TabPanel>
                        )
                    })}
                </Box> :
                <div></div>
            }
        </div>
    );
};

export default MatchGenerator;
