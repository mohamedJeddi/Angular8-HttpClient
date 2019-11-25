import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() productData:any = { prod_name: '', prod_desc: '', prod_price:0 };
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data : any) => {
      this.productData = data;
    })
  }

  updateProduct() {
    this.rest.updateProduct(this.productData, this.route.snapshot.params['id']).subscribe((data: any) => {
      this.router.navigate(['/product-details/'+data._id]);
    },
    err => console.log(err));
  }

}
