import { Conta } from "./src/models/Conta.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import readline from "readline-sync";

let escolha = readline.question("Você quer Conta Poupanca ou Conta Corrente?")

const ObjContaPoupanca = new ContaPoupanca("ana", 22, 44, 55);



const ObjContaCorrente = new ContaCorrente("ana", 44, 13, 5);

if (escolha.toLocaleLowerCase() === "conta poupança" ||escolha.toLocaleLowerCase() === "conta poupanca") {

    ObjContaPoupanca.setSaldo = readline.questionFloat("Informe o saldo: ");
    ObjContaPoupanca.setTitular = readline.question("Informe o titular: ");
    ObjContaPoupanca.setAgencia = readline.questionFloat("Informe sua agência: ");
    ObjContaPoupanca.setLimiteCheque = readline.questionFloat("Informe o limite do cheque: ");

    console.log(ObjContaPoupanca.getSaldo);
    console.log(ObjContaPoupanca.getTitular);
    console.log(ObjContaPoupanca.getAgencia);
    console.log(ObjContaPoupanca.getLimiteCheque);


}
else {
    ObjContaCorrente.setSaldo = readline.questionInt("Informe o seu Saldo: ");
    ObjContaCorrente.setTitular = readline.question("Informe o seu Titular: ");
    ObjContaCorrente.setAgencia = readline.questionFloat("Informe o sua agência: ");
    ObjContaCorrente.setTaxaRendimentoM = readline.questionFloat("Informe a taxa de rendimento por mês: ");
   
    console.log(ObjContaCorrente.getSaldo);
    console.log(ObjContaCorrente.getTitular);
    console.log(ObjContaCorrente.getAgencia);
    console.log(ObjContaCorrente.getTaxaRendimentoM);
}
    