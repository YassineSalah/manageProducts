import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,private productService: ProductService){}

    storeProducts(product: Product) {
        return this.http.put('http://localhost:8080/addProduct',this.productService.addProduct(product));
    }
}