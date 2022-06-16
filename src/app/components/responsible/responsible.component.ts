import {Component, OnInit} from '@angular/core';
import {ResponsibleService} from "../../services/responsible/responsible-service";

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.css']
})
export class ResponsibleComponent implements OnInit {

  public header = ['id', 'ФИО', 'Номер телефона', 'Адрес Вконтакте'];

  constructor(public responsibleService: ResponsibleService) {
  }

  ngOnInit() {
    this.responsibleService.getResponsible();
  }

}
