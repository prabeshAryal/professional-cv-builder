import { Container, Typography, Grid, TextField, Button} from '@mui/material';

const ProjectsANDSkills = ({ nextStep, handleChange, values }) => {

    // for continue event listener
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Projects and Skills
                </Typography>
                <form>
                        <Grid item xs={12}>

                            <TextField
                                id="filled-multiline-flexible"
                                label="Projects"
                            placeholder="Electric Bicycle: designed electrical and mechanical systems for custom 1kW bike 
Smart Appliance: IoT toaster based on Raspberry Pi, Python code, & 3D-printed body"
                            onChange={handleChange(`projects`)}
                            value={values.projects}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField
                                id="filled-multiline-flexible"
                                label="Laboratory"
                            placeholder="Cleanroom fabrication experience, including photolithography, e-beam lithography, metallization, thin film deposition, etching, metrology, SEM imaging."
                            onChange={handleChange(`laboratory_experience`)}
                            value={values.laboratory_experience}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField
                                id="filled-multiline-flexible"
                                label="Technology"
                            placeholder="Knowledge of HTML, CSS and programming in C, PHP, JavaScript, Python. 
Experience with MATLAB, SolidWorks, Microsoft Office Suite, Adobe Creative 
Suite, Google SketchUp."
                            onChange={handleChange(`technology_experience`)}
                            value={values.technology_experience}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Languages"
                            placeholder="Spanish (intermediate), German (beginner)."
                            onChange={handleChange(`languages`)}
                            value={values.languages}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                    <br />
                    <Button
                        onClick={Continue}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Next
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default ProjectsANDSkills;
