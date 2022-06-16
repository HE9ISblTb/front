import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "../../../services/animals/animals-service";

@Component({
  selector: 'app-full-animals',
  templateUrl: './full-animals.component.html',
  styleUrls: ['./full-animals.component.css']
})
export class FullAnimalsComponent implements OnInit {

  constructor(public animalsService: AnimalsService) {
  }

  ngOnInit() {
  }

}
