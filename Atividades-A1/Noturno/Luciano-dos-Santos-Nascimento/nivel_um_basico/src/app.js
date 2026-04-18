const express = require('express')
const app = express()
const port = 3000
const {Fatorial} = require("./fatorial")
app.use(express.json());

let alunos = []

let numero = 5
app.post("/inserir", (req, res)=>{
    let novoAluno = {
        id: alunos.length +1,
        nome: req.body.nome,
        idade: req.body.idade,
        curso: req.body.curso,
    }

    alunos.push(novoAluno)
    res.status(201).json(novoAluno)
})

app.get("/alunos", (req, res) =>{
    res.json(alunos)
})



app.get("/fatorial", (req, res)=>{
   res.send(Fatorial(numero))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
