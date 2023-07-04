import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private firestore: Firestore) { }

  //C => Create
  addProduct(product: Product){
    let $productRef = collection(this.firestore, "products");
    return addDoc($productRef, product);
  }
  //R => Read
  getProducts(){
    let $productsRef=collection(this.firestore,"products");
    return collectionData($productsRef,{idField:"id"}) as Observable<Product[]>;
  }
  getProduct(index: number)
  {
    let $productRef=doc(this.firestore,"products/"+ index);
    return docData($productRef,{idField:"id"}) as Observable<Product>;
  }
  //U => Update
  updateProduct(product: Product){
    let $productRef = doc(this.firestore, "products/"+ product.id);
    return setDoc($productRef, product)
  }
  //D => Delete
  deleteProduct(product: Product){
    let $productRef = doc(this.firestore, "products/"+ product.id)
    return deleteDoc($productRef);
  }

}
