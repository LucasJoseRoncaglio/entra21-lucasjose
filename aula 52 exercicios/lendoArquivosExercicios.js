
/*

1)
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const {EOL} = require("os");

(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "nomes.txt"));

        const nomes = data.toString("utf-8").split(EOL);
        
        const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        console.log(nomesComA);
    } catch (err) {
        console.log(err.message);
    }
})();
*/
2
const fsPromises = require("fs/promises");
const path = require("path");

async function getUserByName(name) {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "users.json"));
        const users = JSON.parse(data.toString("utf-8"));
        
        const user = users.find(user => user.nome === name);

        return user
    } catch (err) {
        console.log(err.message);
    }
}

(async () => {
    const user = await getUserByName("Pedro");

    if (user) {
        console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
    } else {
        console.log("Usuário não foi encontrado!");
    }
})();

/*
Exercício

1) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
presentes no arquivo.

2) Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
não exista a função deve retornar undefined.

Se o usuário existir mostrar as informações do usuário no seguinte formato:
Usuário encontrado: 
nome: [nome do usuário]
idade: [idade do usuário]
email: [email do usuário]

Caso o usuário não existir mostrar a mensagem: "Usuário não foi encontrado."

Obs.: Nome e sobrenome.
*/