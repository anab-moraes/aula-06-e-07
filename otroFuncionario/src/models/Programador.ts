import {Funcionario} from "./Funcionario.js";

export class Programador extends Funcionario{
     private linguagemPrinc: string;
   
    constructor (nome: string, matricula: string, salario: number, linguagemPrinc: string)
        {super (nome, matricula, salario)
        this.linguagemPrinc= linguagemPrinc
       }
    

    public get getLinguagemPrinc(): string {return this.linguagemPrinc}

    public set setLinguagemPrinc(novoLinguagemPrinc :string){
        if(novoLinguagemPrinc.length==0){
            console.log("\n ERRO: A linguagem não pode ser vazia!");
            return;
        }
        this.linguagemPrinc= novoLinguagemPrinc;
    }

}