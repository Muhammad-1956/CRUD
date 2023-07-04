import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {


  constructor(private db: DbService, private router: Router, private title: Title){
    this.title.setTitle("Add")
  }


  addProduct(product: NgForm){
    this.db.addProduct(product.value)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })

    product.reset()
    this.router.navigate([''])
  }
}
