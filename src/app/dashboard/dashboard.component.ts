import { Component, OnInit } from '@angular/core';
import {MOCKUSER} from '../user/mockuser'
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  self = MOCKUSER;
  constructor(sanitizer:DomSanitizer){
    MOCKUSER.sanitizedIcon = sanitizer.bypassSecurityTrustUrl(MOCKUSER.icon);
  }  
  ngOnInit() {
  }
}