import bcrypt from "bcrypt";

import { createApp, upload } from "./config.js";

const app = createApp({
  user: "still_breeze_2546",
  host: "bbz.cloud",
  database: "still_breeze_2546",
  password: "78762e243c46f33b20a1821bf4e5ab1f",
  port: 30211,
});

/* Startseite */
app.get("/", async function (req, res) {
  if (!req.session.userid) {
    res.redirect("/login");
    return;
  }
  res.render("start", {});
});

app.get("/impressum", async function (req, res) {
  res.render("impressum", {});
});

app.get("/register-pfp", async function (req, res) {
  res.render("register-pfp", {});
});

app.get("/main-page", async function (req, res) {
  res.render("main-page", {});
});

//Upload

app.post("/main-page", upload.single("image"), async function (req, res) {
  await app.locals.pool.query(
    "INSERT INTO users (name, image) VALUES ($1, $2)",
    [req.body.name, req.file.filename]
  );
  res.redirect("/main-page");
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
