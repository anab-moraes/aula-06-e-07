import readline from 'readline-sync';
import { Administrador } from "./src/models/Administrador.js";
import { Engenheiro } from "./src/models/Engenheiro.js";
import { Funcionario } from "./src/models/Funcionario.js";
import { Medico } from "./src/models/Medico.js";


let escolha = readline.question("Você é administrador, engenheiro ou médico?")

const ObjAdministrador = new Administrador("ana", "1" ,2500, "1234", "lugar", "11/01/2010", 1);

const ObjEngenheiro = new Engenheiro("ana", "1" ,2500, "1234", "lugar", "11/01/2010", 1);

const ObjMedico = new Medico("ana", "1" ,2500, "1234", "lugar", "11/01/2010", 1);

if (escolha.toLocaleLowerCase() === "administrador") {

    ObjAdministrador.setNome = readline.question("Informe o Nome: ");
    ObjAdministrador.setMatricula = readline.question("Informe a matrícula: ");
    ObjAdministrador.setSalario = readline.questionFloat("Informe o salário: ");
    ObjAdministrador.setTelefone = readline.question("Informe o telefone: ");
    ObjAdministrador.setEndereco = readline.question("Informe o endereço: ");
    ObjAdministrador.setDataNascimento = readline.question("Informe a data de nascimento: ");
    ObjAdministrador.setCra = readline.questionInt("Informe o CRA: ");

    console.log(ObjAdministrador.getNome);
    console.log(ObjAdministrador.getMatricula);
    console.log(ObjAdministrador.getSalario);
    console.log(ObjAdministrador.getTelefone);
    console.log(ObjAdministrador.getEndereco);
    console.log(ObjAdministrador.getDataNascimento);
    console.log(ObjAdministrador.getCra);


}
else if(escolha.toLocaleLowerCase() === "engenheiro") {
    ObjEngenheiro.setNome = readline.question("Informe o Nome: ");
    ObjEngenheiro.setMatricula = readline.question("Informe a matrícula: ");
    ObjEngenheiro.setSalario = readline.questionFloat("Informe o salário: ");
    ObjEngenheiro.setTelefone = readline.question("Informe o telefone: ");
    ObjEngenheiro.setEndereco = readline.question("Informe o endereço: ");
    ObjEngenheiro.setDataNascimento = readline.question("Informe a data de nascimento: ");
    ObjEngenheiro.setNumCrea = readline.questionInt("Informe o CREA: ");

    console.log(ObjEngenheiro.getNome);
    console.log(ObjEngenheiro.getMatricula);
    console.log(ObjEngenheiro.getSalario);
    console.log(ObjEngenheiro.getTelefone);
    console.log(ObjEngenheiro.getEndereco);
    console.log(ObjEngenheiro.getDataNascimento);
    console.log(ObjEngenheiro.getNumCrea);
}

else{
    ObjMedico.setNome = readline.question("Informe o Nome: ");
    ObjMedico.setMatricula = readline.question("Informe a matrícula: ");
    ObjMedico.setSalario = readline.questionFloat("Informe o salário: ");
    ObjMedico.setTelefone = readline.question("Informe o telefone: ");
    ObjMedico.setEndereco = readline.question("Informe o endereço: ");
    ObjMedico.setDataNascimento = readline.question("Informe a data de nascimento: ");
    ObjMedico.setCrm = readline.questionInt("Informe o CRM: ");

    console.log(ObjMedico.getNome);
    console.log(ObjMedico.getMatricula);
    console.log(ObjMedico.getSalario);
    console.log(ObjMedico.getTelefone);
    console.log(ObjMedico.getEndereco);
    console.log(ObjMedico.getDataNascimento);
    console.log(ObjMedico.getCrm);
}
