import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Word } from './entity/word'
import { User } from './entity/user'

const app = express();
app.use(bodyParser.json());
const port = 3000;

// Dummy-Datenbank für die Beispielzwecke später auswechseln
let words: Word[] = [];

app.get('/', (req: Request, res: Response) => {
    console.log('/index.js');
    return res.status(200).send('Hello World');
});

app.post('/words', (req: Request, res: Response) => {
    const { id, german, english, topic } = req.body;
  
    if (id == null || german == null || english == null || topic == null) {
      return res.status(400).send('Incomplete JSON, missing attributes');
    }

    const word = new Word(id, german, english, topic);

    words.push(word);
  
    res.status(200).json(word);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
