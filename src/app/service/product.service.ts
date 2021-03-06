import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts = () => {
    return [
      {
        id: 1,
        name: 'item1',
        rate: 175,
        quality: 1
        },
        {
        id: 2,
        name: 'item2',
        rate: 190,
        quality: 3
        },
        {
        id: 3,
        name: 'item3',
        rate: 213,
        quality: 2
        },
        {
        id: 4,
        name: 'item4',
        rate: 217,
        quality: 1
        },
         {
        id: 5,
        name: 'item5',
        rate: 319,
        quality: 3
        }
    ];
    }
}
