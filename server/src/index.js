// long node version use const express = require('express')
import express from "express";
const app = express();
const port = 5000;
// const jwt  = require("jsonwebtoken");
import jwt from "jsonwebtoken";
app.use(express.json());

const users = [
  {
    identificationNumber: "64070232",
    password: "1234",
    firstName: "wiwat",
    lastName: "liangkobkit",
    phone: "0864122323",
    role: "DOCTOR",
  },
  {
    identificationNumber: "64070231",
    password: "1234",
    firstName: "win",
    lastName: "win",
    phone: "0864122323",
    role: "PATIENT",
  },
];

// Authenication
// login
app.post("/login", (req, res) => {
  //   res.json("hey it work");
  const { identificationNumber, password, firstName, lastName, phone } =
    req.body;

  const check = users.find((x) => {
    return (
      x.identificationNumber === identificationNumber &&
      x.password === password &&
      x.firstName === firstName &&
      x.lastName === lastName &&
      x.phone === phone 
      
    );
  });
  if (check) {
    // generate token
    const accessToken = jwt.sign(
      {
        identificationNumber: check.identificationNumber,
        user: check.firstName,
        lastname: check.lastName,
      },
      "mySecreatKey"
    );
    res.json({
      idcard: check.identificationNumber,
      user: check.firstName,
      lastname: check.lastName,
      accessToken,
    });

    // res.json(check);
  } else {
    res.status(400).json(`some thing wrong ${identificationNumber}`);
  }
});

// verify jwt next = continue call back function
const verify = (req, res) => {
  {
    const authenHeaders = req.headers.authorization;
    if (authenHeaders) {
      const token = authenHeaders.split(" ")[1];
      jwt.verify(token, "mySecreatKey", (err, data) =>{
        if (err) {
            return res.status(403).json(`Token is not vaild`);
        }
        
        req.data = data
        next();
      });
    } else {
      res.status(401).json(`You are not authenticated`);
    }
  }
};


// delete function

app.delete('/users/:userId', verify,(req, res) => {
}) 


const run = app.listen(port, () =>
  console.log(`BackEnd  server is running on port ${port}`)
);

// import express from "express";
// import bodyParser from "body-parser";
// const app = express();
// const port = 3000;
// call prisma
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("wha");
// });

// get user value

// app.get("/users/", async (req, res) => {
//   const user = await prisma.user.findMany();
//   res.json(user);
// });

// update user
// exmaple http://localhost:3000/id

// app.patch("/user/:id", async (req, res) => {
//   try {
//     const findId = await prisma.user.findUnique({
//       where: { id: id },
//     });
//     console.log(findId);
//     if (!findId) {
//       throw {
//         message: "Identification number not found",
//       };
//     }
//     const { id } = req.params;
//     const data = req.body;
//     const update = await prisma.user.update({
//       data: data,
//     });
//     res.json(update);
//   } catch (error) {
//     console.log(error);
//     throw { message: "Error updating" };
//   }
// });

// delete user
// app.delete("/user/:id", async (req, res) => {});

// authentication

// login

// app.post("/login", async (req, res) => {
//   try {
//     const { identificationNumber, password } = req.body;
//     const findId = await prisma.user.findUnique({
//       where: { identificationNumber: identificationNumber },
//     });
//     if (!findId) {
//       throw { message: "Identification number not found" };
//     }
//     if (password !== findId.password) {
//       throw { message: "Password isn't match" };
//     }
//     res.json(findId);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// });

// register

// app.post("/register", async (req, res) => {
//   try {
//     const { identificationNumber, password, firstName, lastName, phone } =
//       req.body;
//     const findId = await prisma.user.findUnique({
//       where: { identificationNumber: identificationNumber },
//     });
//     if (findId) {
//       throw { message: "Identification number already registered" };
//     }
//     const registerNew = await prisma.user.create({
//       data: {
//         identificationNumber: identificationNumber,
//         password: password,
//         firstName: firstName,
//         lastName: lastName,
//         phone: phone,
//       },
//     });
//     res.json(registerNew);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// });

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
