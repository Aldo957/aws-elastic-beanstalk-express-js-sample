const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello 2 World!'));
=======
app.get('/', (req, res) => res.send('Goodbye World!'));
>>>>>>> 44c0c077eb48e4040639aae3247bd758b5491c8b

app.listen(port);
console.log(`App running on http://localhost:${port}`);
