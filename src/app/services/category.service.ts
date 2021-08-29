import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categories = [];

  constructor(
    private api: ApiService
  ) {
    this.api.get('/category/all')
      .subscribe((data: any) => {
        this._categories = data;
      })
  }

  get categories() {
    return this._categories;
  }

  getCategories() {
    return this.api.get('/category/all')
      .pipe(
        map((data: any) => {
          this._categories = data.categories;
          return this._categories;
        })
      )
  }

  addCategory(categoryName: string) {
    return this.api.post('/category/add', {
      name: categoryName
    })
      .pipe(
        map((data: any) => {
          return data.msg;
        })
      )
  }

  removeCategory(categoryId: any) {
    return this.api.post('/category/remove', {
      id: categoryId
    })
      .pipe(
        map((data: any) => {
          return data.msg;
        })
      )
  }
}
