import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  "./button.css"
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
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

    // Validate form data
    if (formData.name === '' || formData.phoneNumber === '' || formData.email === '') {
      // Handle the case where no data was entered
      return;
    }

    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to the next page
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
<EmailIcon/>            </InputAdornment>
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

// import React, { useState, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import {useNavigate} from "react-router-dom"


// interface FormData {
//   name: string;
//   phoneNumber: string;
//   email: string;
// }

// const MyForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     phoneNumber: '',
//     email: '',
//   });

//   useEffect(() => {
//     const storedFormData = localStorage.getItem('formData');
//     if (storedFormData) {
//       setFormData(JSON.parse(storedFormData));
//     }
//   }, []);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     localStorage.setItem('formData', JSON.stringify(formData));
//     // Optionally, perform additional actions after storing the data
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Name"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//         required
//         fullWidth
//       />

//       <TextField
//         label="Phone Number"
//         name="phoneNumber"
//         value={formData.phoneNumber}
//         onChange={handleInputChange}
//         required
//         fullWidth
//       />

//       <TextField
//         label="Email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         required
//         fullWidth
//       />

//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export {MyForm};



// import { useState, useEffect } from 'react';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./button.css"
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import {useNavigate} from "react-router-dom"

// interface FormData {
//     name: string;
//     phoneNumber: string;
//     email: string;

// }

// const Form :React.FC= () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phoneNumber: '',
//         email: '',
//     });
// // const navigate = useNavigate();
// // const [name, setName]= useState('');
// // const [phoneNumber,setPhoneNumber]= useState('');
// // const [email,setEmail] = useState('');

// useEffect(()=>{
//     const storeFormData= localStorage.getItem('formData');
//     if (storeFormData){
//         setFormData(JSON.parse(storeFormData))
//     }
// },[]);

// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>
// const {name, value}= event.target;
// setFormData((prevFormData)=>({...prevFormData, [name]: value}));
// }
// // const handleSubmit= (event: React.FormEvent)=>{
// //     event.preventDefault();

// //     useEffect(() => {
// //       localStorage.setItem('name',JSON.stringify(name) )
     
// //     }, [name])
    
//     // localStorage.setItem('name',JSON.stringify(name));
//     // localStorage.setItem('phonNumber',JSON.stringify(phoneNumber));
//     // localStorage.setItem('email', JSON.stringify(email));

//     // navigate('/nextpage')
// // }
//     // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     //     setFormData((prevData) => ({
//     //         ...prevData,
//     //         [e.target.name]: e.target.value,
//     //     }));
//     // };

//     // const handleSubmit = (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     console.log(formData);
//     // };

//     return (
//         <div id='container'>

//             <Card id='card'>
//                 <CardHeader

//                     title="Fill The Form"
//                 // subheader="September 14, 2016"
//                 />
//                 <Box
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 2, width: '60ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <form onSubmit={handleSubmit}>
//                         <TextField
//                             error
//                             id="outlined-error-helper-text"
//                             label="Name"
//                             name="name"
//                             value={name}
//                             onChange={(e)=>setName(e.target.value)}
//                             // value={formData.name}
//                             // onChange={handleChange}
//                             fullWidth
//                             margin="normal"
//                         />
//                         <TextField
//                             label="Phone Number"
//                             name="phoneNumber"
//                             // value={formData.phoneNumber}
//                             // onChange={handleChange}
//                             fullWidth
//                             margin="normal"
//                             value={phoneNumber}
//                             onChange={(e)=> setPhoneNumber(e.target.value)}
//                         />
//                         <TextField
//                             label="Email"
//                             name="email"
//                             // value={formData.email}
//                             // onChange={handleChange}
//                             fullWidth
//                             margin="normal"
//                             value={email}
//                             onChange={(e)=> setEmail(e.target.value)}
//                         />
//                         <Button id='btn' type="submit" variant="contained" color="primary">
//                             Submit
//                         </Button>
//                     </form>
//                 </Box>
//             </Card>
//         </div>

//     );
// }
// export { Form }