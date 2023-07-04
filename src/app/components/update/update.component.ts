import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  productId: number ;
  product:Product={};

  constructor(private db: DbService, private active: ActivatedRoute, private router: Router, private title: Title){

    this.productId = this.active.snapshot.params["id"];

    this.db.getProduct(this.productId)
    .subscribe( data => this.product = data)

    this.title.setTitle("Update")
  }
  updateProduct(){
    this.db.updateProduct(this.product)
    this.router.navigate([''])
  }
}
