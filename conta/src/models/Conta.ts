export class Conta {

    private titular: string;
    private agencia: number;
    private saldo: number;

    constructor(titular: string, saldo: number, agencia: number) {
        this.saldo = saldo;
        this.titular = titular;
        this.agencia = agencia;
    }

    public get getTitular(): string { return this.titular };
    public get getSaldo(): number { return this.saldo };
    public get getAgencia(): number { return this.agencia };


    public set setSaldo(novoSaldo: number) {
        if (novoSaldo === 0) {
            console.log("\n ERRO: O saldo não pode ser vazio!");
            return;
        }
        this.saldo = novoSaldo;
    }

    public set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O titular não pode ser vazio!");
            return;
        }
        this.titular = novoTitular;
    }

    public set setAgencia(novoAgencia: number) {
        if (novoAgencia === 0) {
            console.log("\n ERRO: O agencia não pode ser vazio!");
            return;
        }
        this.agencia = novoAgencia;
    }


}