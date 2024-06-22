const basicPath = require("./techniques/basicPath.js");  // Asegúrate de usar la ruta correcta
const express = require("express");

const app = express();
app.use(express.json());
const port = 8080;

app.get('/', (req, res) => {
    res.send("I am alive");
});

app.get('/basic_path', (req, res) => {
    res.json(basicPath.calculate(1, 2, 3));
});

// Nueva ruta para categorizar edad
app.post('/categorize_age', (req, res) => {
    const age = req.body.age;
    if (typeof age === 'undefined') {
        return res.status(400).send('Edad no proporcionada');
    }

    const category = basicPath.categorizeAge(age);
    res.json({ age: age, category: category });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
