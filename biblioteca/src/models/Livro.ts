import {ItemBiblio} from "./ItemBiblioteca.js";

export class Livro extends ItemBiblio{
     private autor : string;
     private numeroPag: number
   
    constructor (titulo: string, anoPublicacao: number, autor : string, numeroPag: number)
        {super (titulo, anoPublicacao)
        this.autor = autor;
        this.numeroPag= numeroPag;
       }
    
    public get getAutor(): string {return this.autor};
    public get getNumeroPag(): number {return this.numeroPag};

     public set setAutor(novoAutor: string) {
        if (novoAutor.trim().length === 0) {
            console.log("\n ERRO: O Autor não pode ser vazio!");
            return;
        }
        this.autor = novoAutor;
    }

    public set setNumeroPag(novoNumeroPag: number){
        if(novoNumeroPag===0){
            console.log("\n ERRO: O numero de páginas não pode ser vazio!");
            return;
        }
        this.numeroPag = novoNumeroPag;
    }
}