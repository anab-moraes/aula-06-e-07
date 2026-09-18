export class PessoaFisica {
    private cpf : string;
    private nome : string;
    private email : string;
    private telefone : string;
    private dataNasc : string;

    constructor (cpf: string, nome: string, email: string, telefone: string, dataNasc: string){
        this.cpf= cpf;
        this.nome= nome;
        this.email= email;
        this.telefone= telefone;
        this.dataNasc= dataNasc;
    }

    public get getCpf(): string {return this.cpf};
    public get getNome(): string {return this.nome};
    public get getEmail(): string {return this.email};
    public get getTelefone(): string {return this.telefone};
    public get getDataNasc(): string {return this.dataNasc};

    public set setCpf(novoCpf: string){
        if(novoCpf.trim().length===0){
            console.log("\n ERRO: O cpf não pode ser vazio!");
            return;
        }
        this.cpf = novoCpf;
    }

    public set setNome(novoNome: string){
        if(novoNome.trim().length===0){
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }

    public set setEmail(novoEmail: string){
        if(novoEmail.trim().length===0){
            console.log("\n ERRO: O email não pode ser vazio!");
            return;
        }
        this.email = novoEmail;
    }

    public set setTelefone(novoTelefone: string){
        if(novoTelefone.trim().length===0){
            console.log("\n ERRO: O telefone não pode ser vazio!");
            return;
        }
        this.telefone = novoTelefone;
    }

    public set setDataNasc(novoDataNasc: string){
        if(novoDataNasc.trim().length===0){
            console.log("\n ERRO: A data de nascimento não pode ser vazia!");
            return;
        }
        this.dataNasc = novoDataNasc;
    }


}