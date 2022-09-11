import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
//import { getAuth } from "firebase/auth";

/** authentication/verify user exists
 * 
const auth = getAuth();
const user = auth.currentUser;

const verifyUser = () => {
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
};**/

const Login = () => {
  return (
    <Box display="flex" paddingTop="5%" width={"100%"} height={"100%"}>
      <Box
        m="auto"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/*
        <h3>To continue, log into HungryScholars</h3>
        <h4 style={{ marginLeft: "10px", marginBottom: "5px" }}>
          Email Address
        </h4>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
        </div>
        <h4 style={{ marginLeft: "10px", marginBottom: "5px" }}>Password</h4>
        <div style={{ marginBottom: "10px" }}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
          />
        </div>
        <div
          style={{
            paddingTop: "3%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size="large" variant="contained">
            Log in
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ marginTop: "50px" }}>
            Don't have an account yet? Sign up here.
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/signup"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <Button
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
              variant="contained"
            >
              Sign up
            </Button>
          </Link>
        </div>
        */}
      </Box>
    </Box>
  );
};

export default Login;
