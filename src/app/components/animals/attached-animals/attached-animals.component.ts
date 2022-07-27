import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "../../../services/animals/animals-service";
import {appService} from "../../../services/app-service";

@Component({
  selector: 'app-attached-animals',
  templateUrl: './attached-animals.component.html',
  styleUrls: ['./attached-animals.component.css']
})
export class AttachedAnimalsComponent implements OnInit {

  public header = ['id', 'Название', 'Вид', 'Пол', 'Фото/Видео', 'Ответственное лицо', 'Дата рождения', 'Вакцинация', 'Дегельментизация', 'Стерелизация/Кастрация', 'Лечение', 'Пункт содержания', 'Баланс', 'Документы', 'Хозяин'];

  constructor(public animalsService: AnimalsService,
              public appService: appService) {
  }

  ngOnInit() {
    this.animalsService.getAttachedAnimals();
    this.appService.signIn();
  }

}
