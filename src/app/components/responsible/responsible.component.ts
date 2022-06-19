import {Component, OnInit} from '@angular/core';
import {ResponsibleService} from "../../services/responsible/responsible-service";
import {appService} from "../../services/app-service";

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.css']
})
export class ResponsibleComponent implements OnInit {

  public header = ['id', 'ФИО', 'Номер телефона', 'Адрес Вконтакте'];

  constructor(public responsibleService: ResponsibleService,
              public appService: appService) {
  }

  ngOnInit() {
    this.responsibleService.getResponsible();
    this.appService.signIn();
  }

}
