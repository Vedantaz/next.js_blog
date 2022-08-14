import * as fs from 'fs';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // console.log(req.body);
    let data = await fs.promises.readdir("contactdata");
    console.log(data);

    fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body), () => { });
    res.status(200).json(req);
  } else {
    res.status(200).json(["allBlogs"]);
    // name, email, desc
  }
}

// index.js
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/post-test', (req, res) => {
//     console.log('Got body:', req.body);
//     res.sendStatus(200);
// });

// app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));