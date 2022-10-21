export class Product {
    public id: number;
    public description: string;
    public quantite: number;
    public prix: number;

    constructor(id: number,description: string, quantite: number, prix: number){
        this.id = id;
        this.description = description;
        this.quantite = quantite;
        this.prix = prix;
    }
}