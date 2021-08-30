import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categories = [];
  private inCategoriesChange = new Subject();

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

  notifyCategoriesChange() {
    this.getCategories()
      .subscribe(categories => {
        this.inCategoriesChange.next(categories);
      })
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

  removeCategoryById(categoryId: any) {
    return this.api.post('/category/remove', {
      id: categoryId
    })
      .pipe(
        map((data: any) => {
          return data.msg;
        })
      )
  }

  removeCategoryByName(categoryName: any) {
    return this.api.post('/category/remove', {
      name: categoryName
    })
      .pipe(
        map((data: any) => {
          return data.msg;
        })
      )
  }

  get onCategoriesChange() {
    return this.inCategoriesChange.asObservable();
  }
}
