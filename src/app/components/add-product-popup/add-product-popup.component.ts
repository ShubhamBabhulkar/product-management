import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss']
})
export class AddProductPopupComponent implements OnInit {
  addProductForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    rate: new FormControl('', [
      Validators.required
    ]),
    quality: new FormControl('', [
      Validators.required
    ])
  });
  languages: string[];
  qualityes = [1, 2, 3];
  constructor() { }

  ngOnInit() {
  }
  getrequired = (value) => {
    return this.addProductForm.get(value);
  }
}
