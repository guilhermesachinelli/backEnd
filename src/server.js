import express from "express"; // serve para escutar as requisições
import { config } from "dotenv"; // serve para ler o arquivo .env
 config (); // lê o arquivo .env
const port = process.env.PORT || 5000; // pega a porta do arquivo .env
const app = express (); // Cria o servidor
app.use (express.json ()); // Permite que o servidor entenda JSON
app.get ("/", (req, res) => {
    res.status (200) .json ({message: "Hello World!"});
} );// Cria uma rota
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
});
