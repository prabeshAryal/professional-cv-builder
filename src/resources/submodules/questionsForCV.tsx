// import { Container, Typography, Grid, TextField, Button } from '@mui/material'
import { Component } from 'react'

export default class questionsForCV extends Component{
    state = {
        step: 1,

        // Personal Details
        firstName: '',
        lastName: '',

        // Personal Address
        current_address: '',
        current_area:'',
        city: '',
        zip: '',

        // Personal Contacts
        professional_email_address: '',
        active_phone_number:'',
        
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
        education_title_name :[],
        did_you_graduate: [],
        start_date: [],
        grauation_date: [],
        education_degree: [],
        education_GPA: [],
        education_SAT_GRE_bool: [],
        education_SAT_GRE_score: [],
        
        // What did you Learnt From Education
        education_wanna_describe: [],
        education_coursework_thesis: [],

        education_study_abroad: false,
        no_of_study_aborad: 0,

        education_level: [],
        education_sat: [],
        
    }
    render() {return (<><h1>The logic is yet to be implemented</h1></>) }
}