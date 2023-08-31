import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // body parse requests
app.use(express.static("public"));


app.route('/')
  .get((req, res) => {
    res.render('index.ejs');
  })
  .post((req, res) => {
    const data = {
        note:'<input type="text" id="textbox" name="name"></input>'
    };
    res.render('index.ejs', data);
  });


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });