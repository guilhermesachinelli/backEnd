import express from "express"; // serve para escutar as requisições
import { config } from "dotenv"; // serve para ler o arquivo .env
 config (); // lê o arquivo .env
const port = process.env.PORT || 5000; // pega a porta do arquivo .env
const app = express (); // Cria o servidor
app.use (express.json ()); // Permite que o servidor entenda JSON
app.get ("/", (req, res) => {
    const nome = req.query.nome;
    const batata = req.query.anime;
    res.status (200) .json ({message: `Hello ${nome}`, anime : batata});
} );
app.get ("/:nome/:sobrenome/:idade/:sexo", (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome;
    const idade = req.params.idade;
    const sexo = req.params.sexo;
    res.status (200) .json ({"Meu nome é": `${nome} ${sobrenome} ${idade} ${sexo}`});
});
app.post ("/", (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    const sexo = req.body.sexo;
    res.status (200) .json ({ NomeUsuario:nome, SobrenomeUsuario:sobrenome, IdadeUsuario:idade, SexoUsuario:sexo});
});

app.put ("/", (req, res) => {
    res.status (200) .json ({message: "Hello PUT!"});
});

app.delete ("/", (req, res) => {
    res.status (200) .json ({message: "Hello DELETE!"});
});

// Cria uma rota
app.listen(port, () => {
    console.log(`server started✨ on http://localhost:${port}`)
});
