import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {CategoryService} from "../../../services/category.service";
import {map, switchMap} from "rxjs/operators";
import {combineLatest} from "rxjs";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any = {};
  posts: Array<any> = new Array<any>();

  constructor(
    public authService: AuthService,
    private categoryService: CategoryService,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    combineLatest([
      this.categoryService.getCategories(),
      this.postService.getPosts()
    ])
      .subscribe(([categories, posts]) => {
        this.categories = categories;
        this.posts = posts;
      })
  }

}
