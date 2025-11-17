const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bienvenue sur mon site Node.js hébergé sur Azure</h1><p>Nom : Tlati</p>');
});

app.listen(port, () => {
  console.log(`Application en cours d'exécution sur le port ${port}`);
});

