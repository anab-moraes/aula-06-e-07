import readline from 'readline-sync';
import { Funcionario } from "./src/models/Funcionario.js";
import { Gerente } from "./src/models/Gerente.js";
import { Programador } from "./src/models/Programador.js";


let escolha = readline.question("Você é Gerente ou Programador?")

const ObjGerente = new Gerente("ana", "1" ,2500, 2000);

const ObjProgramador = new Programador("ana", "1" ,2500, "JavaScript");



if (escolha.toLocaleLowerCase() === "gerente") {

    ObjGerente.setNome = readline.question("Informe o nome: ");
    ObjGerente.setMatricula = readline.question("Informe a matrícula: ");
    ObjGerente.setSalario = readline.questionFloat("Informe o salário: ");
    ObjGerente.setBonusAnual = readline.questionFloat("Informe o bonus anual: ");
 

    console.log(ObjGerente.getNome);
    console.log(ObjGerente.getMatricula);
    console.log(ObjGerente.getSalario);
    console.log(ObjGerente.getBonusAnual);



}

else{
    ObjProgramador.setNome = readline.question("Informe o nome: ");
    ObjProgramador.setMatricula = readline.question("Informe a matrícula: ");
    ObjProgramador.setSalario = readline.questionFloat("Informe o salário: ");
    ObjProgramador.setLinguagemPrinc = readline.question("Informe a linguagem principal: ");


    console.log(ObjProgramador.getNome);
    console.log(ObjProgramador.getMatricula);
    console.log(ObjProgramador.getSalario);
    console.log(ObjProgramador.getLinguagemPrinc);
}
