import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    private limiteCheque : number;
   
   
    constructor (titular: string, saldo: number, agencia: number, limiteCheque : number )
        {super (titular, saldo, agencia)
        this.limiteCheque= limiteCheque;
        }

    public get getLimiteCheque(): number {return this.limiteCheque};


    public set setLimiteCheque(novoLimiteCheque: number){
        if(novoLimiteCheque===0){
            console.log("\n ERRO: O limite do cheque especial não pode ser vazio!");
            return;
        }
        this.limiteCheque = novoLimiteCheque;
    }

}