import { Automovel } from "./src/models/Automovel.js";
import { Moto } from "./src/models/Moto.js";
import { Veiculo } from "./src/models/Veiculo.js";
import readline from 'readline-sync';


let escolha = readline.question("Você deseja um automóvel ou uma moto?")

const ObjAutomovel = new Automovel("Chevrolet", "Opala", 1974, "azul", 4, "v8");

const ObjMoto = new Moto("Kawasaki", "Kawasaki Ninja", 2000,"Rosa", 2000);

if (escolha.toLocaleLowerCase() === "automovel") {

    ObjAutomovel.setMarca = readline.question("Informe a marca: ");
    ObjAutomovel.setModelo = readline.question("Informe o modelo: ");
    ObjAutomovel.setAno = readline.questionInt("Informe o ano: ");
    ObjAutomovel.setCor = readline.question("Informe a  cor: ");
    ObjAutomovel.setNumeroPorta = readline.questionInt("Informe o número de portas: ");
    ObjAutomovel.setMotor = readline.question("Informe o motor: ");

    console.log(ObjAutomovel.getMarca);
    console.log(ObjAutomovel.getModelo);
    console.log(ObjAutomovel.getAno);
    console.log(ObjAutomovel.getCor);
    console.log(ObjAutomovel.getNumeroPorta);
    console.log(ObjAutomovel.getMotor);


}
else {
   ObjMoto.setMarca = readline.question("Informe a marca: ");
    ObjMoto.setModelo = readline.question("Informe o modelo: ");
    ObjMoto.setAno = readline.questionInt("Informe o ano: ");
    ObjMoto.setCor = readline.question("Informe a cor da Moto: ");
    ObjMoto.setCilindrada = readline.questionInt("Informe a capacidade dos cilindros: ");


    console.log(ObjMoto.getMarca);
    console.log(ObjMoto.getModelo);
    console.log(ObjMoto.getAno);
    console.log(ObjMoto.getCilindrada);
}
