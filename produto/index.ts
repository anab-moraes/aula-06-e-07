import { Produto } from "./src/models/Produto.js";
import { Sorvete } from "./src/models/Sorvete.js";
import { Camisa } from "./src/models/Camisa.js";
import readline from "readline-sync";

let escolha = readline.question("VocÊ quer sorvete ou camisa?")

const ObjSorvete = new Sorvete(
    0,
    10,
    "Chocolate",
    10

);

const ObjCamisa = new Camisa("cinza", "tecido", "M", 0, "Camisa", 0);

if (escolha.toLocaleLowerCase() === "sorvete") {

    ObjSorvete.setid = readline.questionInt("Informe o id: ");
    ObjSorvete.setNome = readline.question("Informe o nome: ");
    ObjSorvete.setPreco = readline.questionFloat("Informe o preço: ");
    ObjSorvete.setTempAdequada = readline.questionFloat("Informe a temperatura adequada: ");

    console.log(ObjSorvete.getId);
    console.log(ObjSorvete.getNome);
    console.log(ObjSorvete.getPreco);
    console.log(ObjSorvete.getTempAdequada);


}
else {
    ObjCamisa.setid = readline.questionInt("Informe o seu id: ");
    ObjCamisa.setNome = readline.question("Informe o seu nome: ");
    ObjCamisa.setPreco = readline.questionFloat("Informe o seu preço: ");
    ObjCamisa.setCor = readline.question("Informe a cor da camisa: ");
    ObjCamisa.setTecido = readline.question("Informe o tecido: ");
    ObjCamisa.setTamanho = readline.question("Informe o tamanho: ");

    console.log(ObjCamisa.getId);
    console.log(ObjCamisa.getNome);
    console.log(ObjCamisa.getPreco);
    console.log(ObjCamisa.getCor);
    console.log(ObjCamisa.getTecido);
    console.log(ObjCamisa.getTamanho);
}
