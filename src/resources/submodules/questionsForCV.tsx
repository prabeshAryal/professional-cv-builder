// import { Container, Typography, Grid, TextField, Button } from '@mui/material'
import { Component } from 'react'
import Personal_Information from './Personal_Information';
import Academic_Information from './Academic_Information';
import ProjectsANDSkills from './ProjectsAndSkills';
export default class questionsForCV extends Component{
    state = {
        step: 1,
        // Personal Details
        firstName: '',
        lastName: '',
        // Personal Address
        same_country_residence: true,
        country: '',
        current_address: '',
        current_area: '',
        city: '',
        zip: '',
        // Personal Contacts
        professional_email_address: '',
        active_phone_number: '',
        // Education
        education: false,
        no_of_education_institutions: 0,
        multiple_country_studies: false,
        // Education Institution Detail
        education_institution_name: [],
        education_institution_city: [],
        education_institution_state: [],
        education_institution_country: [],
        // Your Education Information
        education_title_name: [],
        // did_you_graduate: [],
        // education_start_date: [],
        education_graduation_date: [],
        education_degree: [],
        education_GPA: [],
        education_SAT_GRE_bool: [],
        education_SAT_GRE_score: [],
        // What did you Learn From Education
        education_coursework: [],
        educational_projects: [],
        // If any study abroad courses
        education_study_abroad: false,
        no_of_study_aborad: 0,
        // Handle More locations
        study_aborad_education_institution_name: [],
        study_aborad_education_institution_city: [],
        study_aborad_education_institution_country: [],
        study_aborad_education_start_date: [],
        study_aborad_education_graduation_date: [],
        study_aborad_education_description: [],
        // Experience
        experience: false,
        no_of_experiences: 0,
        experience_organization: [],
        experience_city: [],
        experience_state: [],
        experience_position_title: [],
        experience_start_date: [],
        experience_end_date: [],
        experience_description: [],
        // Leadership & Activities
        leadership_activities: false,
        no_of_activities: 0,
        activity_organization: [],
        activity_city: [],
        activity_state: [],
        activity_role: [],
        activity_start_date: [],
        activity_end_date: [],
        activity_description: [],
        // Projects & Skills
        projects_skills: false,
        projects: '',
        laboratory_experience: '',
        technology_experience: '',
        languages: '',
        // Additional Information
        interests: [],
        certifications: [],
        // References
        references_available: false,
        references: [],
    }




    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // Handle fields change
    handleChange = (input: string) => (e: { target: { value: unknown; }; }) => {
        this.setState({ [input]: e.target.value });
    };


    render() {
        const { step, ...rest } = this.state
        const values = { step, ...rest }

        switch (step) {
            case 1:
                return (
                    <Personal_Information
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 2:
                return (
                    <Academic_Information
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 3:
                
                return (
                    <ProjectsANDSkills
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
        }   

        
        
        
    }
}