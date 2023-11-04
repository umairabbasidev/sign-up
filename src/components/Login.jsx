import * as React from "react";
import HttpsIcon from "@mui/icons-material/Https";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function Login() {

  const lightTheme = createTheme({
    palette: {
      mode: 'light'
    },
  });
  
  return (
    <>
     <ThemeProvider theme={lightTheme}>
      <CssBaseline />
     
    </ThemeProvider>

      <div className="contaier ">
        <div className="my-9 ">
          <h3 className="my-bg"></h3>

          <HttpsIcon className="lock" />

          <p className="text-2xl my-2">Sign in</p>
        </div>

        <div className="my-5 ">
          <TextField
            // id="outlined-password-input"
            className="w-11/12"
            label="Email Address *"
            type="email"
            autoComplete="current-password"
          />
        </div>

        <div className="">
          <TextField
            // id="outlined-password-input"
            className="w-11/12 "
            label="Password *"
            type="password"
            autoComplete="current-password"
          />
        </div>

        <div className="remember">
          <Checkbox {...label} />
          Remember me
        </div>

        <div className="my-4">
          <Button variant="contained" disableElevation>
            <p
              className=" w-80 h-6  "
              
            >
              Sign In
            </p>
          </Button>
        </div>

        <div className="flex  gap-3 flex-wrap forgot">
          <div>
            <Link href="#" className="forgot">
              Forgot password?{" "}
            </Link>
          </div>
          <div>
            <Link href="#" className="signup">
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
        <div>
          <p className="my-7">
            Copyright ©{" "}
            <Link href="#" className="signup">Your Website </Link>{" "}
            2023.
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
