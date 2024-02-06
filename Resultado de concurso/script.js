/*
Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, 
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, 
verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let stundents = [
    {
        name:"Matheus",
        nota1: 8,
        nota2: 9
    },
    {
        name:"Milton",
        nota1: 4,
        nota2: 3
    },
    {
        name:"David",
        nota1: 6,
        nota2: 8
    }
]


function media (number1, number2){
    let med = (number1+number2)/2
    return med
}

for(let stundent of stundents) {
    let result = media(stundent.nota1, stundent.nota2)
    if(result >= 7) {
    alert(`${stundent.name}, parabéns você foi aprovado com a média ${result}`)
    } else {
    alert(`${stundent.name}, infelizmente você foi reprovado com a média ${result}`)
    }     
}

