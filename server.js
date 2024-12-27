// server.js
const express = require('express');
const path = require('path');
const app = express();

// Defina o diretório onde sua página HTML está localizada
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicie o servidor na porta desejada
const PORT = process.env.PORT || 3009;  // A porta pode ser configurada como 3000 ou qualquer outra
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
