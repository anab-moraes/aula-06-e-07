import { Produto } from "./Produto.js";
export class Sorvete extends Produto{

    private tempAdequada : number;

    constructor (tempAdequada: number, id: number, nome: string, preco: number)
        {super (id, nome, preco)
        this.tempAdequada= tempAdequada;}


    public get getTempAdequada(): number {return this.tempAdequada};

    public set setTempAdequada(novaTempAdequada: number){
        if(novaTempAdequada===0){
            console.log("\n ERRO: O tempAdequada não pode ser vazio!");
            return;
        }
        this.tempAdequada = novaTempAdequada;
    }

   
}
