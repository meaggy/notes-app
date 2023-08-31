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

  app.get('/append-note', (req, res) => {
    const addNote = '<input type="text" class="textbox"></input>';
    res.send(addNote);
  });
  // post -> can post note to groups, i.e. due today due tomorrow 
  // post -> can post to notes to different lists?

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });