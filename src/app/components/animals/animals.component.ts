import { Component, OnInit } from '@angular/core';
import { AnimalsService } from "../../services/animals/animals-service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  public header = ['id', 'Название', 'Вид', 'Пол', 'Фото/Видео', 'Ответственное лицо', 'Дата рождения', 'Вакцинация', 'Дегельментизация', 'Стерелизация/Кастрация', 'Лечение', 'Пункт содержания', 'Баланс', 'Документы', 'Хозяин'];

  constructor(public animalsService: AnimalsService) { }

  ngOnInit() {
    this.animalsService.getAnimals();
  }

}
