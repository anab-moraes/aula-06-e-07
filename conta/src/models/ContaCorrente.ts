import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{

    private taxaRendimentoM : number;

    constructor (titular: string, saldo: number, agencia: number, taxaRendimentoM: number)
        {super (titular, saldo, agencia)
        this.taxaRendimentoM= taxaRendimentoM;}


    public get getTaxaRendimentoM(): number {return this.taxaRendimentoM};

    public set setTaxaRendimentoM(novaTaxaRendimentoM: number){
        if(novaTaxaRendimentoM===0){
            console.log("\n ERRO: O taxaRendimentoM não pode ser vazio!");
            return;
        }
        this.taxaRendimentoM = novaTaxaRendimentoM;
    }

   
}
