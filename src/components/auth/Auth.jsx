// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabeimport * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useAuth } from '../../contexts/AuthContextProvider';

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function Auth() {
//   const {
//     email,
//     password,
//     emailError,
//     passwordError,
//     hasAccount,
//     setPassword,
//     setEmail,
//     setHasAccount,
//     handleLogin,
//     handleSignUp,
//   } = useAuth();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <img className='bebeb' src="https://images.pexels.com/photos/3734026/pexels-photo-3734026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             paddingTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               helperText={emailError}
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               helperText={passwordError}
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />

//             {hasAccount ? (
//               <Button
//               className='mj'
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleLogin}
//               >
//                 Sign In
//               </Button>
//             ) : (
//               <Button
//               className='mj'
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </Button>
//             )}

//             <Grid container className='nh'>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>

//               <Grid item>
//                 {hasAccount ? (
//                   <Link
//                     href="#"
//                     variant="body2"
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 ) : (
//                   <Link
//                     href="#"
//                     variant="body2"
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     {'Have an account? Sign In'}
//                   </Link>
//                 )}
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
// l from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useAuth } from '../../contexts/AuthContextProvider';

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function Auth() {
//   const {
//     email,
//     password,
//     emailError,
//     passwordError,
//     hasAccount,
//     setPassword,
//     setEmail,
//     setHasAccount,
//     handleLogin,
//     handleSignUp,
//   } = useAuth();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <img className='bebeb' src="https://images.pexels.com/photos/3734026/pexels-photo-3734026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             paddingTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               helperText={emailError}
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               helperText={passwordError}
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />

//             {hasAccount ? (
//               <Button
//               className='mj'
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleLogin}
//               >
//                 Sign In
//               </Button>
//             ) : (
//               <Button
//               className='mj'
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </Button>
//             )}

//             <Grid container className='nh'>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>

//               <Grid item>
//                 {hasAccount ? (
//                   <Link
//                     href="#"
//                     variant="body2"
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 ) : (
//                   <Link
//                     href="#"
//                     variant="body2"
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     {'Have an account? Sign In'}
//                   </Link>
//                 )}
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }