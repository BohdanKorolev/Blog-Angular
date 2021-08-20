import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  showCommonComponents: boolean = false;

  constructor(
    private router: Router
  ) {
    this.router.events.forEach((event: any) => {
      if (event.url) {
        this.showCommonComponents = !(event.url == '/auth' || event.url == '/reg');
      } else if (event.routerEvent) {
        this.showCommonComponents = !(event.routerEvent.url === '/auth' || event.routerEvent.url === '/reg');
      }
    });
  }

  ngOnInit() {
  }

  title = 'frontEnd';
}
