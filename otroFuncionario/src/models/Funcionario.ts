export class Funcionario {
    private nome: string;
    private matricula: string;
    private salario: number;
    

    constructor(nome: string, matricula: string, salario: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
       
    }

    public get getNome(): string { return this.nome };
    public get getMatricula(): string { return this.matricula };
    public get getSalario(): number { return this.salario };
   


    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }


    public set setMatricula(novoMatricula: string) {
        if (novoMatricula.length=== 0) {
            console.log("\n ERRO: O matricula não pode ser vazio!");
            return;
        }
        this.matricula = novoMatricula;
    }

    public set setSalario(novoSalario: number) {
        if (novoSalario === 0) {
            console.log("\n ERRO: O salário não pode ser vazio!");
            return;
        }
        this.salario = novoSalario;
    }

}