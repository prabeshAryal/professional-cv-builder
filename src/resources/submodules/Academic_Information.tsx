
import { Container, Typography, Grid, TextField, Button, FormControl,Select, MenuItem, FormLabel,RadioGroup , FormControlLabel, Radio} from '@mui/material'

const Academic_Information = ({ nextStep, handleChange, values }) => {

    // for continue event listener
    const Continue = (e: { preventDefault: () => void; }) => {
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
                        {/* <Grid item xs={12}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={multiple_country_studies}
                                label="Did you study in Multiple Countries?"
                                onChange={handleChange}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </Grid> */}
                        <Grid item xs={12}>
                            <FormControl>

                            <FormLabel id="demo-radio-buttons-group-label">Did you study?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={true}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                                </FormControl>

                        </Grid>
                        {/* email address */}
                        <Grid item xs={12}>
                            <TextField
                                placeholder="Email Address"
                                label="Email Address"
                                onChange={handleChange('email')}
                                defaultValue={values.professional_email_address}
                                // variant="outlined"
                                autoComplete="email"
                                fullWidth
                            />
                        </Grid>
                        <br />
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

export default Academic_Information