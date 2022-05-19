import { Component, OnInit } from '@angular/core';
import {AnimalsService} from "../../services/animals/animals-service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(animalsService: AnimalsService) { }

  ngOnInit(): void {
  }

}
