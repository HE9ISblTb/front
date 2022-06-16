import {Component, OnInit} from '@angular/core';
import {OwnersAnimalsService} from "../../../services/owners-animals/owners-animals-service";

@Component({
  selector: 'app-delete-owners-animals',
  templateUrl: './delete-owners-animals.component.html',
  styleUrls: ['./delete-owners-animals.component.css']
})
export class DeleteOwnersAnimalsComponent implements OnInit {

  constructor(public ownersAnimalsService: OwnersAnimalsService) {
  }

  ngOnInit() {
  }

  deleteData() {
    const body = {
      id: this.ownersAnimalsService.ownersAnimalsIdForDelete
    }
    this.ownersAnimalsService.deleteOwnersAnimals(body);
    this.ownersAnimalsService.closeModalDeleteOwnersAnimals();
    this.ownersAnimalsService.getOwnersAnimals();
  }

}
