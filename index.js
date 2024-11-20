import { createApp, upload } from "./config.js";

const app = createApp({
  user: "autumn_star_7622",
  host: "bbz.cloud",
  database: "demo",
  password: "uaioysdfjoysfdf",
  port: 30211,
});

/* Startseite */
app.get("/", async function (req, res) {
  res.render("start", {});
});

app.get("/impressum", async function (req, res) {
  res.render("impressum", {});
});

app.get("/register", async function (req, res) {
  res.render("register", {});
});

app.get("/register-pfp", async function (req, res) {
  res.render("register-pfp", {});
});

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
