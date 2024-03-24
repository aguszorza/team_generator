import React, {useState, ChangeEvent, Dispatch, SetStateAction} from "react";
import Player from "../types/Player";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { FieldRenderProps } from "react-final-form";
import MatchesService from "../services/MatchService";
import Match from "../types/Match";

type Props = FieldRenderProps<string, any>;


const SelectInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
    <Select {...input} {...rest} />
);

const myInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
    <TextField {...input} {...rest} />
);

interface InputPlayers {
    players: Array<Player>,
}


const PlayerInputComponent = ({setMatches}: { setMatches: React.Dispatch<React.SetStateAction<Array<Match>>>}) => {
    const onSubmit = async (players: InputPlayers) => {
        MatchesService.generateMatches(players?.players || []).then(response => {
            setMatches(response.data)
        })
    }

    return (
        <Box sx={{ marginY: '1em' }}>
            <Form
                onSubmit={onSubmit}
                mutators={{
                    ...arrayMutators
                }}
                render={({
                             handleSubmit,
                             form: {
                                 mutators: { push, pop }
                             }, // injected from final-form-arrays above
                             pristine,
                             form,
                             submitting,
                             values
                         }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <FieldArray name="players">
                                {({ fields }) =>
                                    fields.map((name, index) => (
                                        <div key={name}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                                                <label >Player. #{index + 1}</label>
                                                <Field
                                                    name={`${name}.name`}
                                                    component={myInput}
                                                    label="Name"
                                                    variant="standard"
                                                    sx={{ marginX: '2em' }}
                                                />
                                                <FormControl sx={{ margin: '1em' }}>
                                                    <InputLabel id="demo-simple-select-label">Score</InputLabel>
                                                    <Field
                                                        name={`${name}.score`}
                                                        component={SelectInput}
                                                        label="Score"
                                                    >
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
                                                        <MenuItem value={7}>7</MenuItem>
                                                        <MenuItem value={8}>8</MenuItem>
                                                        <MenuItem value={9}>9</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                    </Field>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    ))
                                }
                            </FieldArray>
                            <div className="buttons">
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        push('players', {name: '', score: 1})
                                        push('players', {name: '', score: 1})
                                    } }
                                    sx={{ margin: '1em' }}
                                >
                                    Add Player
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        pop('players')
                                        pop('players')
                                    }}
                                    color="error"
                                    sx={{ margin: '1em' }}
                                >
                                    Remove Player
                                </Button>
                            </div>

                            <div className="buttons">
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="success"
                                    sx={{ margin: '2em' }}
                                >
                                    Generate matches
                                </Button>
                            </div>
                        </form>
                    )
                }}
            />
        </Box>
    );
};

export default PlayerInputComponent;
