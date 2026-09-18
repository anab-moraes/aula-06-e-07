import { PessoaFisica } from "./PessoaFisica.js";

export class Cliente extends PessoaFisica{
    private clienteDesde: string;

    constructor(
        cpf: string,
        nome: string,
        email: string,
        telefone: string,
        dataNasc: string,
        clienteDesde: string 
    ) 
      {super(cpf, nome, email, telefone, dataNasc);
        this.clienteDesde = clienteDesde;}  
    
        public get getClienteDesde():string{return this.clienteDesde};
        
    public set setClienteDesde(novaData: string){
        if (novaData.trim().length === 0){
            console.log("\n ERRO: O campo não pode ser vazio!");
            return
        }
        this.clienteDesde = novaData;
    }


}

