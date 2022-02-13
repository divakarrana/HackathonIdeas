import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const theme = createTheme();

export default function AddNewIdea(props) {

    const [tags, setTag] = useState('');
    const [months, setMonth] = useState('');
    const [error, setError] = useState({errorTitle: false, errorDesc:false, errorTags:false, errorMonth:false, helperText: ''});
    const monthsList = props.monthsList;
    let idGen = props.idGen;

    const history = useHistory();

    const handleIdeaSubmission = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        if(!data.get('title')){
            setError({...error, errorTitle: true, helperText: "Required field"});
        } else if(!data.get("desc")){
            setError({...error, errorDesc: true, helperText: "Required field"});
        }  else if(!data.get("tagsLabelId")){
            setError({...error, errorTags: true, helperText: ""});
        } else if(!data.get("monthsLabelId")) {
            setError({...error, errorMonth: true, helperText: ""});
        } else {
            history.push('/');
            let newIdea = {id:idGen, title: data.get('title'), des: data.get('desc'), tag: data.get('tagsLabelId'), votes: 0, month: data.get('monthsLabelId'), createdBy: localStorage.getItem('empId'), votedBy: [], createdDate: new Date().toDateString()};
            props.updateIdeasList(newIdea);
        }
    }

    const handleChange = (e) => {
        e.target.name === 'tagsLabelId' ? setTag(e.target.value) :  setMonth(e.target.value);
    }

    const cancelHandler = () => {
        history.push('/');
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Submit Your Innovative Idea Here!
                    </Typography>
                    <Box component="form" onSubmit={handleIdeaSubmission} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                error={error.errorTitle}
                                helperText={error.helperText}
                                required
                                id="title"
                                name="title"
                                label="Title"
                                fullWidth
                                autoComplete="on"
                                variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={error.errorDesc}
                                    helperText={error.helperText}
                                    required
                                    id="desc"
                                    name="desc"
                                    label="Description"
                                    fullWidth
                                    autoComplete="on"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="tagsLabel" >Tags</InputLabel>
                                    <Select
                                        error={error.errorTags}
                                        labelId="tagsLabel"
                                        id="tagsLabelId"
                                        name="tagsLabelId"
                                        value={tags}
                                        label="Tags"
                                        fullWidth
                                        onChange={handleChange}>
                                            <MenuItem value="tech">Tech</MenuItem>
                                            <MenuItem value="feature">Feature</MenuItem>
                                            <MenuItem value="process">Process</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="monthsLabel" >Month</InputLabel>
                                    <Select
                                        error={error.errorMonth}
                                        labelId="monthsLabel"
                                        id="monthsLabelId"
                                        name="monthsLabelId"
                                        value={months}
                                        label="Month"
                                        fullWidth
                                        onChange={handleChange}>
                                            {monthsList.map(month => <MenuItem value={month} key={month}>{month}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="outlined" color="success" type='submit'>Submit</Button> &nbsp;
                                <Button variant="outlined" color="error" onClick={cancelHandler}>Cancel</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}