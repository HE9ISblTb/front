import { Component, OnInit } from '@angular/core';
import { OwnersAnimalsService } from "../../services/owners-animals-service/owners-animals-service";

@Component({
  selector: 'app-owners-animals',
  templateUrl: './owners-animals.component.html',
  styleUrls: ['./owners-animals.component.css']
})
export class OwnersAnimalsComponent implements OnInit {

  public header = ['id', 'ФИО', 'Номер телефона', 'Адрес', 'Кличка', 'Вид', 'Дата передачи владельцу', 'Дата возврата, причина'];

  constructor(public ownersAnimalsService: OwnersAnimalsService) { }

  ngOnInit() {
    this.ownersAnimalsService.getOwnersAnimals();
  }
}