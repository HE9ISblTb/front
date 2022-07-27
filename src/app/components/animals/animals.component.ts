import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "../../services/animals/animals-service";
import {appService} from "../../services/app-service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  public header = ['id', 'Название', 'Вид', 'Пол', 'Фото/Видео', 'Ответственное лицо', 'Вакцинация', 'Дегельментизация', 'Стерелизация/Кастрация', 'Пункт содержания', 'Баланс'];

  constructor(public animalsService: AnimalsService,
              public appService: appService,
              private http: HttpClient,
              private route: Router,) {
  }

  ngOnInit() {
    this.animalsService.getAnimals();
    this.appService.signIn();
  }

  attachedAnimals() {
    this.route.navigate(['attached-animals']).then();
  }

}
