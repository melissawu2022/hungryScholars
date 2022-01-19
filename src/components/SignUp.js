import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { db } from "../utils/firestore";
import { collection, doc, addDoc, getDoc } from "firebase/firestore";
import { atom, useAtom } from "jotai";
import React from "react";

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const nameAtom = atom("");
const emailAtom = atom("");

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

const User = () => {
  const [name, setName] = useAtom(nameAtom);
  const [email, setEmail] = useAtom(emailAtom);

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
          />
        </div>
        <h4 style={{ marginLeft: "10px", marginBottom: "5px" }}>Name</h4>
        <div style={{ marginBottom: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Enter your name."
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <h4 style={{ marginLeft: "10px", marginBottom: "5px" }}>
          Anything else we should know?
        </h4>
        <div>
          <TextField
            id="outlined-basic"
            label="(ie. Allergies)"
            rows={4}
            variant="outlined"
            multiline
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
            onClick={() => addUser(name, email)} //send data to firebase
            variant="contained"
          >
            Sign Up
          </Button>
        </div>
        {/**console.log("INPUT AFTER ONSUBMIT: ", input)**/}
      </Box>
    </Box>
  );
};

export default User;
