import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "../../../services/animals/animals-service";

@Component({
  selector: 'app-delete-animals',
  templateUrl: './delete-animals.component.html',
  styleUrls: ['./delete-animals.component.css']
})
export class DeleteAnimalsComponent implements OnInit {

  constructor(public animalsServise: AnimalsService) {
  }

  ngOnInit() {
  }

  deleteData() {
    const body = {
      id: this.animalsServise.animalsIdForDelete
    }
    this.animalsServise.deleteAnimals(body);
    this.animalsServise.closeModalDeleteAnimals();
    this.animalsServise.getAnimals();
  }

}
