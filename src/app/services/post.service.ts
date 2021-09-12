import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs/operators";

export interface Post {
  categoryId: string,
  title: string,
  bannerImg: string,
  content: string,
  author: string,
  dateTime: Date
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(
    private api: ApiService
  ) { }

  createPost(post: Post) {
    return this.api.post('/post/add', {
      post: post
    })
      .pipe(
        map((resp: any) => {
          return resp.msg;
        })
      )
  }

  getPosts() {
    return this.api.get('/post/all')
      .pipe(
        map((resp: any) => {
          return resp.posts.map((post: any) => ({
            ...post,
            bannerImg: /data[^"]+/.exec(post.bannerImg)
          }));
        })
      );
  }

}
