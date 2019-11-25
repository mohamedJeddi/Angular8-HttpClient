import { Component, OnInit } from '@angular/core';
import { RestService } from './../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: [];
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.rest.getProducts().subscribe((data : any) => {
      this.products = data;
    })
  }

  add() {
    this.router.navigate(['/product-add']);
  }

  delete(id) {
    this.rest.deleteProduct(id).subscribe((data : any) => {
      this.getProducts();
    },
    err => console.log(err));
  }

}
