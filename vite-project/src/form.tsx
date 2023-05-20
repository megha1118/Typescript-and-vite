import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField,Button,Typography,CardContent,
Card } from '@mui/material';
// import Button from '@mui/material/Button';
import  "./button.css"
// import Typography from '@mui/material/Typography';
// import CardContent from '@mui/material/CardContent';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
// import Card from '@mui/material/Card';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.name === '' || formData.phoneNumber === '' || formData.email === '') {
      return;
    }

    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    navigate('/table');
  };

  return (
    <div id='container'>
      
      <Card id='card'>
        <CardContent>
        <Typography id='heading' >
        Fill The Form Given Below
      </Typography>
        </CardContent>
        <form id='form' onSubmit={handleSubmit}>
      <TextField
      id='username'
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        color="success" focused
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                 <PersonIcon/>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        id='usernumber'
        label="Phone Number"
        name="phoneNumber"
        color="success" focused
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                  <LocalPhoneIcon/>
            </InputAdornment>
          ),
        }}
              />

      <TextField
      id='useremail'
        label="Email"
        name="email"
        color="success" focused
        value={formData.email}
        onChange={handleInputChange}
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                 <EmailIcon/>    
        </InputAdornment>
          ),
        }}
      />

      <Button id='btn' type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
       </Card>
   </div>
   
  );
};

export {MyForm};

