import { Veiculo } from "./Veiculo.js";

export class Automovel extends Veiculo{
    private numeroPorta : number;
    private motor : string;

    constructor (marca: string, modelo: string, ano: number, cor:string, numeroPorta: number, motor: string){
        super(marca,modelo,ano,cor)
        this.numeroPorta = numeroPorta;
        this.motor = motor;}

    public get getNumeroPorta(): number {return this.numeroPorta};
    public get getMotor(): string {return this.motor};

      public set setNumeroPorta(novoNumeroPorta: number){
        if(novoNumeroPorta===0){
            console.log("\n ERRO: O número de portas não pode ser vazio!");
            return;
        }
        this.numeroPorta = novoNumeroPorta;
    }

      public set setMotor(novoMotor: string){
        if(novoMotor.trim().length===0){
            console.log("\n ERRO: O motor não pode ser vazio!");
            return;
        }
        this.motor = novoMotor;
    }

}