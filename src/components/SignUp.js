import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { db } from "../utils/firestore";
import { collection, doc, addDoc, getDoc } from "firebase/firestore";
import { atom, useAtom } from "jotai";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const nameAtom = atom("");
const emailAtom = atom("");
const passwordAtom = atom("");


const addUser = async (fullName, contactEmail) => {
  let docRef = doc(db, "users", contactEmail);
  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) {
      //RENDER SNACKBAR WITH "DOCUMENT EXISTS ALREADY"
      console.log("Document exists already");
      console.log(docSnap.data());
    } else {
      //RENDER SNACKBAR WITH "SUCCESS! ACCOUNT CREATED"
      docRef = await addDoc(collection(db, "users"), {
        email: contactEmail,
        name: fullName,
      });
      console.log("Document successfully created, ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


const auth = getAuth();

/*const addUser = async (authentication, email, password) => {
  createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
}*/



const User = () => {
  /*const [name, setName] = useAtom(nameAtom);*/
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);

  return (
    <Box display="flex" paddingTop="10px" width={"100%"} height={"100%"}>
      <Box
        m="auto"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h3 style={{ marginLeft: "10px" }}> Sign up with your email address</h3>
        <h4 style={{ marginLeft: "10px", marginBottom: "5px" }}>Email</h4>
        <div style={{ marginBottom: "25px" }}>
          <TextField
            id="outlined-basic"
            label="Enter your email."
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <h4 style={{ marginLeft: "10px", marginBottom: "5px" }}>Password</h4>
        <div style={{ marginBottom: "25px" }}>
          <TextField
            id="outlined-password-input"
            type="password"
            label="Create password."
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            paddingTop: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => addUser(auth, email, password)} //send data to firebase
            variant="contained"
          >
            Sign Up
          </Button>
        </div>
        <h6>Or sign in here if you already have an account</h6>
        {/**console.log("INPUT AFTER ONSUBMIT: ", input)**/}
      </Box>
    </Box>
  );
};

export default User;
