import { Produto } from "./src/models/Produto.js";
import { Televisao } from "./src/models/Televisao.js";
import { Smartphone } from "./src/models/Smartphone.js";
import readline from "readline-sync";

let escolha = readline.question("Você quer uma Televisao ou um Smartphone?")

const ObjTelevisao = new Televisao(444444, "hehe", 455, 50);

const ObjSmartphone = new Smartphone (666666, "tech", 22 , 64);

if (escolha.toLocaleLowerCase() === "televisao") {

    ObjTelevisao.setCodigoBarras = readline.questionInt("Informe o código barras: ");
    ObjTelevisao.setFabricante = readline.question("Informe o fabricante: ");
    ObjTelevisao.setPreco = readline.questionFloat("Informe o preço: ");
    ObjTelevisao.setTamanhoPolegada = readline.questionFloat("Informe o tamanho em polegadas: ");

    console.log(ObjTelevisao.getCodigoBarras);
    console.log(ObjTelevisao.getFabricante);
    console.log(ObjTelevisao.getPreco);
    console.log(ObjTelevisao.getTamanhoPolegada);


}
else {
    ObjSmartphone.setCodigoBarras = readline.questionInt("Informe o código de barras: ");
    ObjSmartphone.setFabricante = readline.question("Informe o fabricante: ");
    ObjSmartphone.setPreco = readline.questionFloat("Informe o preço: ");
    ObjSmartphone.setArmazenamentoGB = readline.questionInt("Informe o armazenamento do smartphone: ");
   

    console.log(ObjSmartphone.getCodigoBarras);
    console.log(ObjSmartphone.getFabricante);
    console.log(ObjSmartphone.getPreco);
    console.log(ObjSmartphone.getArmazenamentoGB);
   
}
