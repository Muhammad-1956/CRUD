import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/interfaces/product';
import { DbService } from 'src/app/services/db.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[]= []

  constructor(private db: DbService, private title: Title){
    this.db.getProducts().subscribe(data => this.products = data )
    this.title.setTitle("Home")
  }

  deleteProduct(product: Product){
    this.db.deleteProduct(product)
    .then(() =>{

    })
    .catch(()=>{

    })
  }

  showAlert(product: Product) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteProduct(product)
      }
    }).then(()=>{
      Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
      )
    })
  }


}

