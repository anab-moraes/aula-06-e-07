import { PessoaFisica } from "./PessoaFisica.js";

export class Funcionario extends PessoaFisica{
    private registro: string;
    private carteiraTrabalho: string;
    private pis : string;

    constructor(
        cpf: string,
        nome: string,
        email: string,
        telefone: string,
        dataNasc: string,
        registro: string ,
        carteiraTrabalho : string,
        pis: string

    ) 
      {super(cpf, nome, email, telefone, dataNasc);
        this.registro = registro;
        this.carteiraTrabalho = carteiraTrabalho;
        this.pis = pis;
    }  
    
     public get getRegistro():string{return this.registro};
      public get getCarteiraTrabalho():string{return this.carteiraTrabalho};
       public get getPis():string{return this.pis};

    public set setRegistro(novoRegistro: string){
        if (novoRegistro.trim().length === 0){
            console.log("\n ERRO: O campo não pode ser vazio!");
            return
        }
        this.registro = novoRegistro;
    }

     public set setCarteiraTrabalho(novoCarteiraTrabalho: string){
        if (novoCarteiraTrabalho.trim().length === 0){
            console.log("\n ERRO: O campo não pode ser vazio!");
            return
        }
        this.carteiraTrabalho = novoCarteiraTrabalho;
    }

     public set setPis(novoPis: string){
        if (novoPis.trim().length === 0){
            console.log("\n ERRO: O campo não pode ser vazio!");
            return
        }
        this.pis = novoPis; 
    }


}
