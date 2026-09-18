import {ItemBiblio} from "./ItemBiblioteca.js";

export class Revista extends ItemBiblio{
     private edicao : number;
   
    constructor (titulo: string, anoPublicacao: number, edicao : number)
        {super (titulo, anoPublicacao)
        this.edicao= edicao;
       }
    

    public get getEdicao(): number {return this.edicao};

    public set setEdicao(novoEdicao: number){
        if(novoEdicao===0){
            console.log("\n ERRO: A edição não pode ser vazio!");
            return;
        }
        this.edicao = novoEdicao;
    }

}