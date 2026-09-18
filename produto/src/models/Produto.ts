export class Produto {
    private id : number;
    private nome : string;
    private preco : number;
   
    constructor (id: number, nome: string, preco: number){
        this.id= id;
        this.nome= nome;
        this.preco= preco;
    }

    public get getId(): number {return this.id};
    public get getNome(): string {return this.nome};
    public get getPreco(): number {return this.preco};


    public set setid(novoId: number){
        if(novoId===0){
            console.log("\n ERRO: O id não pode ser vazio!");
            return;
        }
        this.id = novoId;
    }

    public set setNome(novoNome: string){
        if(novoNome.trim().length===0){
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }

    public set setPreco(novoPreco: number){
        if(novoPreco===0){
            console.log("\n ERRO: O preco não pode ser vazio!");
            return;
        }
        this.preco = novoPreco;
    }

   
}