import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categories: Array<any> = new Array<any>();

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categories = response;
      })
  }

  updateCategories() {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categories = response;
      })
  }
}
