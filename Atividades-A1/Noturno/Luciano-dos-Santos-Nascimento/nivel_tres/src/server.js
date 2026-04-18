const express = require('express')
const colors = require('colors')
const app = express()
const port = 3000
app.use(express.json());

let alunos = []

app.use((req, res, next) => {
  console.log("Luciano passou no middleware");
  next();
});+

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

app.get("/aluno/:id", (req, res) =>{
    let IdAluno = Number(req.params.id)
    let aluno = alunos.find( a => a.id == IdAluno)
    if(aluno){
        console.log("Sucesso" .green)
        res.status(200).json(aluno)
    }else{
        console.log("Falha" .red)
        res.status(404).json({"mensagem": "Aluno não encontrado"})
    }
    
})

app.put("/aluno/:id", (req, res)=>{
  
    let ID = req.params.id
    alunos[ID] = {
        nome: req.body.nome,
        idade: req.body.idade,
        curso: req.body.curso,
    }

    res.status(200).json(alunos[ID])

})

app.delete("/aluno/:id", (req, res)=>{
  
 
    alunos.splice(req.params.id, 1)

    res.status(200).send("Removido!!!!")
    
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})