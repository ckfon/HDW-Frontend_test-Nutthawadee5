import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/ProductModel';
import {ListProductModel} from 'src/app/model/ListProductModel';
import {NgForm,NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent {
  //const listproduct = [];
  productData: ProductModel = {};

  //listproduct: ListProductModel =[this.productData];
  // orderFrom = new FormGroup({});
  // items = new FormArray([]);
  
 //let productmodel : ProductModel;
  //private listproduct:string[];
  constructor() {
  
  }

  OnInit(){
    // this.orderFrom = this.formBuilder.group({
    //   items:this.formBuilder.array([this.createItem()])
    // });
  }
  // createItem(): FormGroup{
  //   return this.formBuilder.group({
  //     id:"",
  //     productName:"",
  //     img:"",
  //     price:0,
  //     detail:""
  //   });
  // }
  addItem(){
    // this.items = this.orderFrom.get('items') as FormArray;
    // this.items.push(this.createItem());
    const listproduct = [];
   //ListProductModel.push(this.productData);
   listproduct.push(this.productData);
    console.log(this.productData);
    console.log(listproduct);
  }
  onSave(){
    // const listproduct = [];
    // listproduct.push(this.productData);
    console.log(this.productData);                  
      return true;
  }



}
