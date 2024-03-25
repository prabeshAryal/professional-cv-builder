import { Container, Typography, Grid, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Personal_Information = ({ nextStep, handleChange, values }) => {

    // for continue event listener
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Enter Personal Information
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                placeholder="First Name"
                                label="First Name"
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}
                                autoComplete="firstName"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Last Name"
                                label="Last Name"
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName}
                                autoComplete="lastName"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Email Address"
                                label="Email Address"
                                onChange={handleChange('professional_email_address')}
                                defaultValue={values.professional_email_address}
                                autoComplete="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Active Phone Number"
                                label="Active Phone Number"
                                onChange={handleChange('active_phone_number')}
                                defaultValue={values.active_phone_number}
                                autoComplete="tel"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={`Pathao Office`}
                                label={`Exact landmark of Residence`}
                                onChange={handleChange(`current_address`)}
                                value={values.current_address}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={`Mid-Baneshwor`}
                                label={`Area of Residence`}
                                onChange={handleChange(`current_area`)}
                                value={values.current_area}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Are you applying in same country where you currently live?</FormLabel>
                                <RadioGroup
                                    aria-label="Are you applying in same country as you live or not ?"
                                    name="same_country_residence"
                                    value={values.same_country_residence}
                                    onChange={handleChange('same_country_residence')}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                       <Grid item xs={12}>
                            <TextField
                                placeholder={`Nepal`}
                                label={`Country of Residence`}
                                onChange={handleChange(`country`)}
                                value={values.country}
                                fullWidth
                            />
                        </Grid>
                        {/* Education Institution City */}
                        <Grid item xs={12}>
                            <TextField
                                placeholder={`Kathmandu`}
                                label={`City of Residence`}
                                onChange={handleChange(`city`)}
                                value={values.city}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={`310327`}
                                label={`ZIP Code`}
                                onChange={handleChange(`zip`)}
                                value={values.zip}
                                fullWidth
                            />
                        </Grid>
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

export default Personal_Information;
