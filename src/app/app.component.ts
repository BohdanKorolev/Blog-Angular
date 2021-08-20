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
        this.showCommonComponents = !(event.url == '/authenticate' || event.url == '/registration');
      } else if (event.routerEvent) {
        this.showCommonComponents = !(event.routerEvent.url === '/authenticate' || event.routerEvent.url === '/registration');
      }
    });
  }

  ngOnInit() {
  }

  title = 'frontEnd';
}
