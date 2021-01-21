import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const port = 3000;

const handleHome = (req, res) => res.send("Hello World!");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(helmet())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/", handleHome);

app.get("/profile", handleProfile);

const handleListening = () =>
  console.log(`Listening at http://localhost:${port}`);

app.listen(port, handleListening);
