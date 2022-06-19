import {Component, OnInit} from '@angular/core';
import {OwnersAnimalsService} from "../../services/owners-animals/owners-animals-service";
import {appService} from "../../services/app-service";

@Component({
  selector: 'app-owners-animals',
  templateUrl: './owners-animals.component.html',
  styleUrls: ['./owners-animals.component.css']
})
export class OwnersAnimalsComponent implements OnInit {

  public header = ['id', 'ФИО', 'Номер телефона', 'Адрес', 'Кличка', 'Вид', 'Дата передачи владельцу', 'Дата возврата, Причина'];

  constructor(public ownersAnimalsService: OwnersAnimalsService,
              public appService: appService) {
  }

  ngOnInit() {
    this.ownersAnimalsService.getOwnersAnimals();
    this.appService.signIn();
  }
}
