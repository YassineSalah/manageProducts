import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product.model';

@Injectable()
export class ProductService {

    private products: Product[] = [
        new Product(
            1,
            'Dell 225',
            10,
            1500
        ),
        new Product(
            2,
            'HP 22',
            20,
            1200
        ),
        new Product(
            3,
            'MSI',
            15,
            1400
        )
    ];

    constructor(private http: Http){}

    getProducts() {
        return this.products.slice();
    }

    getProduct(index: number) {
        return this.products[index];
    }

    addProduct(product: Product){
        return this.http.put('http://localhost:8080/addProduct',product);
    }

    deleteProduct(id: number){
        this.products.forEach((element,index)=>{
            if(element.id==id) this.products.splice(index,1);
         });
    }
}

