import { ProductService } from '../../service/product.service';
import { AddProductPopupComponent } from '../add-product-popup/add-product-popup.component';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-news-dashboar',
  templateUrl: './product-dashboar.component.html',
  styleUrls: ['./product-dashboar.component.scss']
})
export class ProductDashboarComponent implements OnInit {
  invalidPassword = false;
  hide = true;
  isErrorMessage: any;
  dataSource = [];
  setCount: any;
  products: { id: number; name: string; price: number; discount: number; img_url: string; }[];
  constructor(
    private dialog: MatDialog,
    private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  openDialog = () => {
    this.dialog.open(AddProductPopupComponent, {
      disableClose: true
    })
    .afterClosed()
    .subscribe(result => {
      if (result !== 'Nochanges') {
        this.setData(result);
      }
    });
  }

  getProducts = () => {
    this.dataSource = this.productService.getProducts();
  }

  setData = (data) => {
    this.dataSource.push(data);
    this.dataSource = this.dataSource.slice();
  }

deteteProduct = (product) => {
  const index = this.dataSource.indexOf(product);
  this.dataSource.splice(index, 1);
  console.log('this.dataSource', product);
  this.dataSource = this.dataSource.slice();
}

}