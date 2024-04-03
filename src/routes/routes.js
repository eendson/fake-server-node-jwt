const express = require("express");
const cors = require("cors");
const config = require("../libs/config");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());

app.post("/sign", (req, res) => {
  const email = config.credentials.email;
  const password = config.credentials.password;

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "Valor da chave nome gerada no jwt, digite aqui o valor que desejar.",
      email,
      role: ["sysAdmin"],
    };

    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: 100000,
    });

    return res.json({ token: token });
  }

  res.status(500).json({ message: "Usuário ou senha incorreta" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});

