import {Component, OnInit} from '@angular/core';
import {ResponsibleService} from "../../../services/responsible/responsible-service";

@Component({
  selector: 'app-delete-responsible',
  templateUrl: './delete-responsible.component.html',
  styleUrls: ['./delete-responsible.component.css']
})
export class DeleteResponsibleComponent implements OnInit {

  constructor(public responsibleService: ResponsibleService) {
  }

  ngOnInit() {
  }

  deleteData() {
    const body = {
      id: this.responsibleService.responsibleIdForDelete
    }
    this.responsibleService.deleteResponsible(body);
    this.responsibleService.closeModalDeleteResponsible();
    this.responsibleService.getResponsible();
  }

}
