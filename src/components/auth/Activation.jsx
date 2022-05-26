
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContextProvider";

const Activation = () => {
  const { activation } = useAuth();
  const [code, setCode] = useState();
  const { navigate } = useNavigate();

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../../contexts/AuthContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';

function Copyright(props) {
    
    
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


  const handleInp = (e) => {
    const code = e.target.value;
    setCode(code);
  };


  return (
    <Box sx={{ m: "15vh auto" }}>
      <Paper elevation={2} sx={{ p: "100px 30vw", alignSelf: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h5" mb={3}>
            Введите активационный код
          </Typography>
          <Typography variant="body1" mb={2}>
            Вам на почту был отправлен активационный код. Проверьте почту, и
            введите код для подтверждения регистрации
          </Typography>
          <FormControl>
            <Box>
              <InputLabel htmlFor="my-input">
                Activation code / Активационный код
              </InputLabel>
              <Input onChange={handleInp} aria-describedby="my-helper-text" />
              <FormHelperText sx={{ mt: "10px" }} id="my-helper-text">
                Никому не сообщайте свой активационный код
              </FormHelperText>
              <Button
                variant="outlined"
                onClick={() => {
                  activation(code);
                  navigate("/login");
                }}
              >
                Подтвердить
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};

export default Activation;

const theme = createTheme();

export default function Activation() {
    const { activation } = useAuth();
    const [ code, setCode ] = React.useState()
    const { navigate } = useNavigate();

    const handleInp = (e) => {
         const code = e.target.value;
         setCode(code)
    }
console.log(code);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ACTIVATION
          </Typography>
          <Box
            // component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="activation"
              label="Activation Code"
              name="code"
              autoComplete="code"
              autoFocus
              onChange={handleInp}
              value={code}
            />
            <Button
              //   type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{activation(code); Navigate('/login')}}
            >
              Activation Code
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
