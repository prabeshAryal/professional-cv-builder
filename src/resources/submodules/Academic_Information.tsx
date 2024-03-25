import React from 'react';
import { Container, Typography, Grid, TextField, Button, FormControl, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Academic_Information = ({ nextStep, handleChange, values }) => {
    // Function to handle continue button click event
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Enter Academic Information
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        {/* Question: Did you study? */}
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Did you ever attend any education institution for your studies?</FormLabel>
                                <RadioGroup
                                    aria-label="Did you study?"
                                    name="education"
                                    value={values.education}
                                    onChange={handleChange('education')}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* Conditional rendering based on whether the user studied or not */}
                        {values.education && (
                            <>
                                {/* Question: Number of Education Institutions */}
                                <Grid item xs={12}>
                                    <TextField
                                        placeholder="No of Education Institutions"
                                        label="No of Education Institutions"
                                        type="number"
                                        onChange={handleChange('no_of_education_institutions')}
                                        value={values.no_of_education_institutions}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Have you studied in multiple countries? (Don't include the exchanges)??</FormLabel>
                                        <RadioGroup
                                            aria-label="studied in multiple countries"
                                            name="multiple_country_studies"
                                            value={values.multiple_country_studies}
                                            onChange={handleChange('multiple_country_studies')}
                                        >
                                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                            <FormControlLabel value={false} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                {/* Loop to dynamically generate fields for each education institution */}
                                {[...Array(parseInt(values.no_of_education_institutions))].map((_, index) => (
                                    <React.Fragment key={index}>
                                        {/* Education Institution Name */}
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder={`Baku Engineering University`}
                                                label={`Education Institution Name `}
                                                onChange={handleChange(`study_aborad_education_institution_name[${index}]`)}
                                                value={values.study_aborad_education_institution_name[index]}
                                                fullWidth
                                            /> </Grid>
                                        {/* Education Institution Country */}

                                        {values.multiple_country_studies && (<><Grid item xs={12}>
                                            <TextField
                                            placeholder={`Azerbaijan`}
                                            label={`Education Institution Country`}
                                            onChange={handleChange(`study_aborad_education_institution_country[${index}]`)}
                                            value={values.study_aborad_education_institution_country[index]}
                                            fullWidth
                                        />
                                        </Grid></>)}
                                        {/* Education Institution City */}
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder={`Khirdalan`}
                                                label={`Education Institution City`}
                                                onChange={handleChange(`study_aborad_education_institution_city[${index}]`)}
                                                value={values.study_aborad_education_institution_city[index]}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder={`Absheron`}
                                                label={`Education Institution State`}
                                                onChange={handleChange(`education_institution_state[${index}]`)}
                                                value={values.education_institution_state[index]}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder={`July 2026`}
                                                label={`What did/will you graduate?`}
                                                onChange={handleChange(`education_graduation_date[${index}]`)}
                                                value={values.education_graduation_date[index]}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder={`Bachelors in Computer Engineering`}
                                                label={`What degree you received?`}
                                                onChange={handleChange(`education_title_name[${index}]`)}
                                                value={values.education_title_name[index]}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder={`4.0`}
                                                label={`What was/your GPA?`}
                                                onChange={handleChange(`education_GPA[${index}]`)}
                                                value={values.education_GPA[index]}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12}>

                                            <TextField
                                                id="filled-multiline-flexible"
                                                label="Courseworks"
                                                placeholder="Relevant Coursework: Computer Aided Machine Design, Thermodynamics, Engineering Design Seminar, Solid Mechanics, Mechanical Systems, Materials, Data Structures and Algorithms."
                                                onChange={handleChange(`education_coursework[${index}]`)}
                                                value={values.education_coursework[index]}
                                                multiline
                                                variant="filled"
                                                fullWidth
                                                />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                id="filled-multiline-flexible"
                                                label="Educational Projects (If any)"
                                                placeholder="Design Project: Aerobic Charge: Converting kinetic energy during exercise to electrical charge."
                                                onChange={handleChange(`educational_projects[${index}]`)}
                                                value={values.educational_projects[index]}
                                                multiline
                                                variant="filled"
                                                fullWidth
                                            />
                                        </Grid>

                                        {/* Add additional fields as necessary */}
                                    </React.Fragment>
                                ))}
                            </>
                        )}
                    </Grid>
                    {/* Continue Button */}
                    <Button
                        onClick={Continue}
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

export default Academic_Information;
