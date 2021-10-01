import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/ProductModel';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
//import { DialogproductComponent } from '../dialogproduct/dialogproduct.component';

const ELEMENT_DATA: ProductModel[] = [
  {id: "1234", productName: 'Neo Cushion Matte',price:1350, img:"img1", detail: 'H',bestseller:true},
  {id: "2354", productName: 'Neo Cushion Glow',price:1350, img: "", detail: 'He',bestseller:true},
  {id: "4569", productName: 'Neo Cushion Matte',price:1350, img: "", detail: 'Li',bestseller:true},
  {id: "4569", productName: 'Neo Cushion Glow',price:1350, img: "", detail: 'Be',bestseller:true},
  {id: "7895", productName: 'Neo Cushion Matte',price:1350, img: "", detail: 'B',bestseller:true},
  {id: "7859", productName: 'Neo Cushion Glow',price:1350, img: "", detail: 'C',bestseller:true},
]
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent  {
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  myControl = new FormControl();
  dataSource = ELEMENT_DATA
  //filteredOptions: Observable<string[]>;
  //private listproduct:string[];
  constructor(public dialog: MatDialog) { 
   
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog  );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value))
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

 

  addProduct(){
    //this.listproduct.unshift(product);
    return false;
  }

  // removeProduct(product){
  //   this.listproduct.forEach((element,index) => {
  //     if(element == product){
  //         this.listproduct.splice(index,1);
  //     }
  //   });


  // }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog   {}
