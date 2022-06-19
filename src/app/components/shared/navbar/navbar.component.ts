import {Component, OnInit} from '@angular/core';
import {appService} from "../../../services/app-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(public appService: appService) {
  }

  ngOnInit() {
  }

}
