import { Box,TextField} from "@mui/material";
import styled from "@emotion/styled";
import {addAppointment} from "../../services/appointment-api.js";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Component = styled(Box)`
margin-top:20px;
width:350px;
height:auto;
margin:auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Wrapper = styled(Box)`
padding: 10px 30px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > Button, & > p{
    margin-top: 10px;
    margin-Bottom:20px;
    
}
`;

const defaultValue ={
    name: "",
    email: "",
    phoneNo: "",
    appointmentDate: ""
  }

export const Appointment = () =>{

    const [details,setDetails]=useState(defaultValue);

    const navigate = useNavigate();

const onValueChange =(e)=>{
  console.log(e.target.name,e.target.value);
  setDetails(
    {
      ...details,[e.target.name]:e.target.value
    })
    console.log(details);
}



const addAppointmentDetails = async()=>{
    await addAppointment(details);
    navigate("/add");

}

    return (
        <div className="hero" style={{margin:"60px"}}>
        <div className="heading">
            <h1>Book Your Appointment</h1>
        </div>
            <Component>
            <Box>
            <Wrapper>
            <TextField variant="standard" name="name" label="Enter name" required="true" onChange={(e)=>onValueChange(e)}></TextField>
            <TextField variant="standard" name="email" type="email" label="Enter Email" required="true" onChange={(e)=>onValueChange(e)}></TextField>
            <TextField variant="standard" name="phoneNo" label="Enter Phone no." required="true" onChange={(e)=>onValueChange(e)}></TextField>
            <TextField
        id="date"
        name="appointmentDate"
        label="Choose your appointment date"
        type="date"
        required="true"
        onChange={(e)=>onValueChange(e)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="primary" onClick={()=>addAppointmentDetails()} type="submit">Submit</Button>
            </Wrapper>
            
            </Box>
                
            </Component>
        </div>
    );
}