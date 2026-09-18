import { Produto } from "./Produto.js";

export class Camisa extends Produto {
    private cor : string;
    private tecido : string;
    private tamanho : string;
   
    constructor (cor: string, tecido: string, tamanho: string, id: number, nome: string, preco: number)
        {super (id, nome, preco)
        this.cor= cor;
        this.tecido= tecido;
        this.tamanho= tamanho;}
    

    public get getCor(): string {return this.cor};
    public get getTecido(): string {return this.tecido};
    public get getTamanho(): string {return this.tamanho};


    public set setCor(novaCor: string){
        if(novaCor.trim().length===0){
            console.log("\n ERRO: O cor não pode ser vazio!");
            return;
        }
        this.cor = novaCor;
    }

    public set setTecido(novoTecido: string){
        if(novoTecido.trim().length===0){
            console.log("\n ERRO: O tecido não pode ser vazio!");
            return;
        }
        this.tecido = novoTecido;
    }

    public set setTamanho(novoTamanho: string){
        if(novoTamanho.trim().length===0){
            console.log("\n ERRO: O tamanho não pode ser vazio!");
            return;
        }
        this.tamanho = novoTamanho;
    }

   
}