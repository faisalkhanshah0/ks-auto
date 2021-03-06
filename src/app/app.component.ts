import * as jQuery from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { APPCONFIG } from './config';
import { LayoutService } from './layout/layout.service';

// 3rd
import 'styles/material2-theme.scss';
import 'styles/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';
import 'styles/main.scss';
import '../../node_modules/ngx-datetime-picker/ngx-datetime-picker.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LayoutService],
})
export class AppComponent implements OnInit {
  public AppConfig: any;
  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
    this.AppConfig = APPCONFIG;
    console.log(this.AppConfig);
    // Scroll to top on route change 
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });

    this.checkLogin();

  }

  
  checkLogin(){
    if(!window.localStorage.user){
      this.router.navigate(['/login']);
    }
    if(window.localStorage.user && !JSON.parse(window.localStorage.user).user){
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }
}
