import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CategoryService} from "../../../services/category.service";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Array<any> = new Array<any>();

  constructor(
    public authService: AuthService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categories = response;
      })
  }

}
