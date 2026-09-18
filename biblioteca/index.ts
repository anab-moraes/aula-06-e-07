import { ItemBiblio } from "./src/models/ItemBiblioteca.js";
import { Livro } from "./src/models/Livro.js";
import { Revista } from "./src/models/Revista.js";
import readline from 'readline-sync';


let escolha = readline.question("Você tem uma revista ou livro?")

const ObjLivro = new Livro("Sally Face: Art, Lore and More", 2024, "Steve Gabry", 240);

const ObjRevista = new Revista("Batman: O Último Dia Das Bruxas",2024, 4);

if (escolha.toLocaleLowerCase() === "livro") {

    ObjLivro.setTitulo = readline.question("Informe a Titulo: ");
    ObjLivro.setAnoPublicacao = readline.questionInt("Informe o AnoPublicacao: ");
    ObjLivro.setAutor = readline.question("Informe o Autor: ");
    ObjLivro.setNumeroPag = readline.questionInt("Informe a  NumeroPag: ");


    console.log(ObjLivro.getTitulo);
    console.log(ObjLivro.getAnoPublicacao);
    console.log(ObjLivro.getAutor);
    console.log(ObjLivro.getNumeroPag);



}
else {
    ObjRevista.setTitulo = readline.question("Informe a Titulo: ");
    ObjRevista.setAnoPublicacao = readline.questionInt("Informe o ano de publicacao: ");
    ObjRevista.setEdicao = readline.questionInt("Informe a edicao: ");



    console.log(ObjRevista.getTitulo);
    console.log(ObjRevista.getAnoPublicacao);
    console.log(ObjRevista.getEdicao);

}
