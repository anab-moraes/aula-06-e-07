import { Produto } from "./Produto.js";
export class Televisao extends Produto{

    private tamanhoPolegada : number;

    constructor (codigoBarras: number, fabricante: string, preco: number, tamanhoPolegada: number)
        {super (codigoBarras, fabricante, preco)
        this.tamanhoPolegada= tamanhoPolegada;}


    public get getTamanhoPolegada(): number {return this.tamanhoPolegada};

    public set setTamanhoPolegada(novaTamanhoPolegada: number){
        if(novaTamanhoPolegada===0){
            console.log("\n ERRO: O tamanhoPolegada não pode ser vazio!");
            return;
        }
        this.tamanhoPolegada = novaTamanhoPolegada;
    }

   
}
