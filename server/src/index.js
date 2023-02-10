import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
// call prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("wha");
});

// get user value
app.get("/users/", async (req, res) => {
  const user = await prisma.user.findMany();
  res.json(user);
});

// authentication

// login
app.post("/login", async (req, res) => {
  try {
    const { identificationNumber, password } = req.body;
    const findId = await prisma.user.findUnique({
      where: { identificationNumber: identificationNumber },
    });
    if (!findId) {
      throw { message: "Identification number not found" };
    }
    if (password != findId.password) {
      throw { message: "Password isn't match" };
    }
    res.json(findId);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// register

app.post("/register", async (req, res) => {
  try {
    const { identificationNumber, password, firstName, lastName, phone } =
      req.body;
    const findId = await prisma.user.findUnique({
      where: { identificationNumber: identificationNumber },
    });
    if (findId) {
      throw { message: "Identification number already registered" };
    }
    const registerNew = await prisma.user.create({
      data: {
        identificationNumber: identificationNumber,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      },
    });
    res.json(registerNew);
  } catch (error) {
    console.log(error);
    res.status(400).json(error)
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
