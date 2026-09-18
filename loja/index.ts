import { Cliente } from "./src/models/Cliente.js";
import { Funcionario } from "./src/models/Funcionario.js";
import { PessoaFisica } from "./src/models/PessoaFisica.js";
import readline, { question } from "readline-sync";

let escolha = readline.question("Você quer se cadastrar para funcionário ou cliente?")
if(escolha.toLocaleLowerCase()==="funcionario" || escolha.toLocaleLowerCase()==="funcionário"){

    let cpf = readline.question("Informe o seu cpf: ");
let nome = readline.question("Informe o seu nome: ");
let email = readline.question("Informe o seu email: ");
let telefone = readline.question("Informe o seu telefone: ");
let dataNasc = readline.question("Informe a sua data de nascimento: ");
let registro = readline.question("Informe o seu registro: ");
let carteiraTrabalho = readline.question("Informe sua carteira de trabalho: ");
let pis = readline.question("Informe o seu pis: ")

const ObjFucionario = new Funcionario (
    cpf,
    nome,
    email,
    telefone,
    dataNasc,
    registro,
    carteiraTrabalho,
    pis
);

console.log(ObjFucionario.getCpf);
console.log(ObjFucionario.getNome);
console.log(ObjFucionario.getEmail);
console.log(ObjFucionario.getTelefone);
console.log(ObjFucionario.getDataNasc);
console.log(ObjFucionario.getRegistro);
console.log(ObjFucionario.getCarteiraTrabalho);
console.log(ObjFucionario.getPis);

}

else {
        let cpf = readline.question("Informe o seu cpf: ");
let nome = readline.question("Informe o seu nome: ");
let email = readline.question("Informe o seu email: ");
let telefone = readline.question("Informe o seu telefone: ");
let dataNasc = readline.question("Informe a sua data de nascimento: ");
let clienteDesde = readline.question("Informe desde quando você é cliente: ");

const ObjCliente = new Cliente (
    cpf,
    nome,
    email,
    telefone,
    dataNasc,
    clienteDesde)

    console.log(ObjCliente.getCpf);
console.log(ObjCliente.getNome);
console.log(ObjCliente.getEmail);
console.log(ObjCliente.getTelefone);
console.log(ObjCliente.getDataNasc);
console.log(ObjCliente.getClienteDesde);
}


