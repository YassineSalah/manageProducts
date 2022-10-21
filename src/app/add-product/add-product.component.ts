import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('productForm') productForm!: NgForm;
  product: Product = new Product(0, '',0,0);
  
  

  constructor(
    //private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.product.id = 0;
    this.product.description = this.productForm.value.description;
    this.product.quantite = 200;
    this.product.prix = 300;
    this.productService.addProduct(this.product)
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
    this.router.navigate(["/product-list"]);
  }

}
